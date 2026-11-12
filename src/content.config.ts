import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import {
  categoryNames,
  coverNames,
  normalizeCategory,
} from "./data/post-options";
import { languages } from "./i18n";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    date: z.coerce.date(),
    lang: z.enum(languages).default("zh-CN"),
    category: z.preprocess(
      (value) => (typeof value === "string" ? normalizeCategory(value) : value),
      z.enum(categoryNames),
    ),
    tags: z.array(z.string().trim().min(1)),
    cover: z.enum(coverNames),
    // Optional real screenshot used as the card/article cover.
    // When set, it replaces the decorative generic cover.
    coverImage: z.string().trim().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // Tool pages (all optional; posts without them render as normal posts).
    pricingModel: z.enum(["free", "freemium", "paid"]).optional(),
    startingPrice: z.string().trim().optional(),
    needVPN: z.boolean().optional(),
    cnAlternative: z.string().trim().optional(),
    affiliateUrl: z.url().optional(),
    updatedDate: z.coerce.date().optional(),
  }),
});
export const collections = { posts };
