import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { books, getBook } from "../../../lib/books";
import { absoluteUrl } from "../../../lib/site";

type BookPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book) {
    return {};
  }

  return {
    title: book.title,
    description: book.description,
    alternates: {
      canonical: `/books/${book.slug}`,
    },
    openGraph: {
      title: book.title,
      description: book.description,
      url: `/books/${book.slug}`,
      type: "article",
      images: [{ url: absoluteUrl(book.coverImage), alt: `Cover of ${book.title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: book.title,
      description: book.description,
      images: [absoluteUrl(book.coverImage)],
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    description: book.description,
    inLanguage: book.language,
    genre: book.collection,
    image: absoluteUrl(book.coverImage),
    url: absoluteUrl(`/books/${book.slug}`),
    workExample: {
      "@type": "DigitalDocument",
      name: `${book.title} PDF`,
      encodingFormat: "application/pdf",
      contentUrl: absoluteUrl(book.pdf),
    },
  };

  return (
    <main className="library-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="site-frame">
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Bayt Al-Ilm home">
            <span className="brand-mark" aria-hidden="true">
              ۞
            </span>
            <span>
              <strong>Bayt Al-Ilm</strong>
              <small>House of knowledge</small>
            </span>
          </Link>
          <Link className="header-note" href="/">
            Back to library
          </Link>
        </header>

        <article className="book-detail">
          <div className="book-detail-cover">
            <Image
              src={book.coverImage}
              alt={`Cover of ${book.title}`}
              fill
              sizes="(max-width: 700px) 100vw, 360px"
              priority
            />
          </div>
          <div className="book-detail-content">
            <p className="eyebrow">{book.collection}</p>
            <h1>{book.title}</h1>
            <p className="intro-copy">{book.description}</p>
            <dl className="book-facts">
              <div>
                <dt>Language</dt>
                <dd>{book.language}</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>Digital PDF</dd>
              </div>
            </dl>
            <a className="download-link" href={book.pdf} download={book.fileName}>
              <span>Download PDF</span>
              <span className="download-icon" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
