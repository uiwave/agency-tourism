import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const tours = defineCollection({
  loader: glob({
    base: "./src/content/tours",
    pattern: "**/*.md",
    generateId: ({ entry }) => {
      const path = entry.replace(/\.md$/, "");
      return path;
    },
  }),
  schema: z.object({
    title: z.string(),
    destination: z.string(),
    duration: z.string(),
    type: z.string(),
    price: z.number().positive(),
  }),
});

export const collections = {
  tours,
};
