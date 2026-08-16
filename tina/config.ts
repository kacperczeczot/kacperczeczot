import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: 'main',
  // Nigdy nie wklejaj tu kluczy TinaCloud — repo i strona są publiczne.
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'home',
        label: 'Strona główna (Hero i liczniki)',
        path: 'src/data',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
          filename: {
            readonly: true,
          },
        },
        match: { include: 'home' },
        fields: [
          { type: 'string', name: 'heroName', label: 'Imię i nazwisko' },
          { type: 'string', name: 'heroRole', label: 'Podtytuł główny' },
          {
            type: 'string',
            name: 'heroIntro',
            label: 'Krótki biogram',
            ui: { component: 'textarea' },
          },
          { type: 'image', name: 'heroImage', label: 'Portret Hero' },
          {
            type: 'object',
            name: 'credentials',
            label: 'Wskaźniki liczbowe',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: [item?.value, item?.label].filter(Boolean).join(' · ') || 'Wskaźnik',
              }),
            },
            fields: [
              { type: 'string', name: 'value', label: 'Wartość' },
              { type: 'string', name: 'label', label: 'Etykieta' },
            ],
          },
          { type: 'string', name: 'contactEmail', label: 'E-mail kontaktowy' },
          { type: 'string', name: 'contactInvitation', label: 'Zaproszenie do współpracy (stopka)' },
          { type: 'string', name: 'githubUrl', label: 'Profil GitHub' },
          { type: 'string', name: 'youtubeUrl', label: 'Kanał YouTube' },
        ],
      },
      {
        name: 'bio',
        label: 'Bio i edukacja',
        path: 'src/data',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
          filename: {
            readonly: true,
          },
        },
        match: { include: 'bio' },
        fields: [
          { type: 'string', name: 'bioTitle', label: 'Tytuł strony' },
          {
            type: 'string',
            name: 'bioSubtitle',
            label: 'Podtytuł',
            ui: { component: 'textarea' },
          },
          { type: 'string', name: 'bioHeadline', label: 'Nagłówek biogramu' },
          {
            type: 'string',
            name: 'bioLeadText',
            label: 'Główny tekst biografii',
            ui: { component: 'textarea' },
          },
          {
            type: 'string',
            name: 'bioSecondaryText',
            label: 'Drugi akapit biografii',
            ui: { component: 'textarea' },
          },
          {
            type: 'object',
            name: 'higherEducation',
            label: 'Szkolnictwo wyższe',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.degree || item?.period || 'Etap' }),
            },
            fields: [
              { type: 'string', name: 'period', label: 'Okres' },
              { type: 'string', name: 'institution', label: 'Uczelnia' },
              { type: 'string', name: 'degree', label: 'Stopień' },
              { type: 'string', name: 'specialization', label: 'Kierunek / specjalizacja' },
              { type: 'string', name: 'highlights', label: 'Wyróżnienia', list: true },
            ],
          },
          {
            type: 'object',
            name: 'musicSchoolEducation',
            label: 'Szkoła muzyczna',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.degree || item?.period || 'Etap' }),
            },
            fields: [
              { type: 'string', name: 'period', label: 'Okres' },
              { type: 'string', name: 'institution', label: 'Szkoła' },
              { type: 'string', name: 'degree', label: 'Dyplom' },
              { type: 'string', name: 'specialization', label: 'Wydział / klasa' },
              { type: 'string', name: 'highlights', label: 'Wyróżnienia', list: true },
            ],
          },
          {
            type: 'object',
            name: 'individualAwards',
            label: 'Nagrody i wyróżnienia',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || item?.year || 'Nagroda' }),
            },
            fields: [
              { type: 'string', name: 'year', label: 'Rok' },
              { type: 'string', name: 'title', label: 'Nazwa nagrody' },
              { type: 'string', name: 'issuer', label: 'Organizator' },
            ],
          },
          {
            type: 'object',
            name: 'mainInstruments',
            label: 'Instrumentarium główne',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || 'Instrument' }),
            },
            fields: [
              { type: 'string', name: 'name', label: 'Instrument / dyscyplina' },
              { type: 'string', name: 'category', label: 'Kategoria' },
              { type: 'string', name: 'desc', label: 'Opis', ui: { component: 'textarea' } },
            ],
          },
          {
            type: 'object',
            name: 'additionalInstruments',
            label: 'Instrumentarium dodatkowe',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || 'Instrument' }),
            },
            fields: [
              { type: 'string', name: 'name', label: 'Nazwa' },
              { type: 'string', name: 'desc', label: 'Opis' },
            ],
          },
        ],
      },
      {
        name: 'ensembles',
        label: 'Zespoły i formacje',
        path: 'src/content/ensembles',
        format: 'md',
        ui: {
          filename: {
            slugify: (values) =>
              (values.name || 'formacja')
                .toString()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, ''),
          },
        },
        fields: [
          { type: 'string', name: 'name', label: 'Nazwa formacji', isTitle: true, required: true },
          { type: 'string', name: 'role', label: 'Rola artystyczna' },
          {
            type: 'string',
            name: 'pillar',
            label: 'Kategoria',
            options: [
              { value: 'orkiestry', label: 'Orkiestry' },
              { value: 'chory', label: 'Chóry & Zespoły wokalne' },
              { value: 'teatr', label: 'Scena & Teatr muzyczny' },
              { value: 'estrada', label: 'Kameralistyka & Estrada' },
            ],
          },
          { type: 'string', name: 'concertCount', label: 'Liczba koncertów' },
          { type: 'string', name: 'years', label: 'Lata działalności' },
          { type: 'number', name: 'order', label: 'Kolejność wyświetlania' },
          {
            type: 'image',
            name: 'photos',
            label: 'Grafiki (przeciągnij i upuść)',
            list: true,
          },
          {
            type: 'string',
            name: 'highlights',
            label: 'Kluczowe osiągnięcia',
            list: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Opis i osiągnięcia',
            isBody: true,
          },
        ],
      },
      {
        name: 'works',
        label: 'Dzieła autorskie',
        path: 'src/content/works',
        format: 'md',
        ui: {
          filename: {
            slugify: (values) =>
              (values.title || 'dzielo')
                .toString()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, ''),
          },
        },
        fields: [
          { type: 'string', name: 'title', label: 'Tytuł dzieła', isTitle: true, required: true },
          { type: 'string', name: 'subtitle', label: 'Podtytuł / miejsce realizacji' },
          {
            type: 'string',
            name: 'type',
            label: 'Kategoria',
            options: [
              { value: 'conducting', label: 'Dyrygentura koncertowa' },
              { value: 'production', label: 'Produkcja studyjna & Realizacja' },
            ],
          },
          { type: 'string', name: 'year', label: 'Rok' },
          {
            type: 'string',
            name: 'description',
            label: 'Krótki opis',
            ui: { component: 'textarea' },
          },
          { type: 'image', name: 'cover', label: 'Okładka / kadr graficzny' },
          { type: 'string', name: 'videoUrl', label: 'Link wideo (opcjonalny)' },
          { type: 'number', name: 'order', label: 'Kolejność wyświetlania' },
          {
            type: 'object',
            name: 'youtubeVideos',
            label: 'Filmy YouTube',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || 'Nagranie' }),
            },
            fields: [
              { type: 'string', name: 'title', label: 'Tytuł nagrania' },
              { type: 'string', name: 'youtubeId', label: 'ID filmu YouTube' },
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Opis partytury i instrumentacji',
            isBody: true,
          },
        ],
      },
    ],
  },
});
