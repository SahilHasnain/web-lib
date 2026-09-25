import type { MetadataRoute } from "next";
import { books } from "../lib/books";
import { absoluteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...books.map((book) => ({
      url: absoluteUrl(`/books/${book.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteUrl(book.coverImage)],
    })),
  ];
}
