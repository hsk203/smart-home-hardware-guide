import { t } from "../i18n";
export const categoryNames = [
  "standing-desks",
  "smart-switches",
  "ergonomic-chairs",
  "small-space",
] as const;
export type Category = (typeof categoryNames)[number];
export const categoryLabel = (category: string) =>
  categoryNames.includes(category as Category)
    ? t(`category.${category as Category}`)
    : category;
// Preserve frontmatter written with Chinese category labels.
export function normalizeCategory(value: string): string {
  const legacy: Record<string, Category> = {};
  return (
    legacy[value] ??
    categoryNames.find((category) => categoryLabel(category) === value) ??
    value
  );
}
export const coverNames = [
  "tool",
  "astro",
  "vue",
  "css",
  "notes",
  "life",
  "typescript",
  "git",
  "design",
] as const;
