import { defineCollection, z } from 'astro:content';

const ensemblesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    pillar: z.enum(['orkiestry', 'chory', 'teatr', 'estrada']),
    role: z.string(),
    concertCount: z.string(),
    highlights: z.array(z.string()),
    photos: z.array(z.string()),
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
    youtubeVideos: z.array(
      z.object({
        title: z.string(),
        youtubeId: z.string(),
      })
    ),
    order: z.number(),
  }),
});

const labCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    featured: z.boolean(),
    order: z.number(),
  }),
});

export const collections = {
  ensembles: ensemblesCollection,
  works: worksCollection,
  lab: labCollection,
};
