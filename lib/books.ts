export type Book = {
  slug: string;
  title: string;
  description: string;
  collection: string;
  language: string;
  coverImage: string;
  pdf: string;
  fileName: string;
};

export const books: Book[] = [
  {
    slug: "ikhteyarate-mustafa-english",
    title: "Ikhteyarate Mustafa (English)",
    description:
      "Read the English digital edition of Ikhteyarate Mustafa from the Bayt Al-Ilm Seerah collection.",
    collection: "Seerah",
    language: "English",
    coverImage: "/covers/ikhteyarate-mustafa-english-digital.png",
    pdf: "/pdfs/ikhteyarate-mustafa-english-digital.pdf",
    fileName: "ikhteyarate-mustafa-english-digital.pdf",
  },
  {
    slug: "shifa-shareef-english",
    title: "Shifa Shareef (English)",
    description:
      "Read the English digital edition of Shifa Shareef from the Bayt Al-Ilm Seerah collection.",
    collection: "Seerah",
    language: "English",
    coverImage: "/covers/shifa-shareef-english-digital.png",
    pdf: "/pdfs/shifa-shareef-english-digital.pdf",
    fileName: "shifa-shareef-english-digital.pdf",
  },
];

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}
