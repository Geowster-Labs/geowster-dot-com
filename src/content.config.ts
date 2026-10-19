import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: file('src/content/services.json'),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    groups: z.array(
      z.object({
        name: z.string(),
        items: z.array(z.string()),
      }),
    ),
  }),
});

const values = defineCollection({
  loader: file('src/content/values.json'),
  schema: z.object({
    title: z.string(),
    body: z.string(),
    order: z.number(),
  }),
});

export const collections = { services, values };
