import { defineCollection, z } from 'astro:content';

const ensemblesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    pillar: z.enum(['orkiestry', 'chory', 'teatr', 'estrada']),
    role: z.string(),
    concertCount: z.string(),
    years: z.string().optional().default(''),
    highlights: z.array(z.string()).default([]),
    photos: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const worksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    type: z.enum(['conducting', 'production']),
    year: z.string(),
    description: z.string(),
    cover: z.string().nullable().optional(),
    videoUrl: z.string().nullable().optional(),
    youtubeVideos: z.array(
      z.object({
        title: z.string(),
        youtubeId: z.string(),
      })
    ).default([]),
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    ).default([]),
    videoHeading: z.string().optional().default('Zapis wideo'),
    order: z.number(),
  }),
});

export const collections = {
  ensembles: ensemblesCollection,
  works: worksCollection,
};
