export type Book = {
  slug: string;
  downloadCounterId: string;
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
    slug: "addawlatul-makkiyyah-english",
    downloadCounterId: "addawlatul-makkiyyah",
    title: "Addawlatul Makkiyyah (English)",
    description:
      "Read the English digital edition of Addawlatul Makkiyyah from the Bayt Al-Ilm collection.",
    collection: "Islamic literature",
    language: "English",
    coverImage: "/covers/addawatul-makkiyyah-english-digital.png",
    pdf: "/pdfs/addawatul-makkiyyah-english-digital.pdf",
    fileName: "addawatul-makkiyyah-english-digital.pdf",
  },
  {
    slug: "ikhteyarate-mustafa-english",
    downloadCounterId: "ikhteyarate-mustafa-english",
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
    downloadCounterId: "shifa-shareef-english",
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
    downloadCounterId: "tawakkul-life",
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
