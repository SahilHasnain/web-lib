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
  {
    slug: "tawakkul-the-missing-peace-in-the-journey-of-life",
    title: "Tawakkul: The Missing Peace in the Journey of Life",
    description:
      "A consideration of reliance upon Allah (tawakkul) and inner peace on the journey of life.",
    collection: "Tasawwuf",
    language: "English",
    coverImage: "/covers/tawakkul-the-missing-peace-in-the-journey-of-life.png",
    pdf: "/pdfs/tawakkul-the-missing-peace-in-the-journey-of-life.pdf",
    fileName: "tawakkul-the-missing-peace-in-the-journey-of-life.pdf",
  },
];

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}
