import Link from "next/link";
import Image from "next/image";

type Book = {
  id: string;
  title: string;
  subtitle: string;
  collection: string;
  coverImage: string;
  pdf: string;
  fileName: string;
};

const books: Book[] = [
  {
    id: "adawlatul-makkiya",
    title: "Adawlatul Makkiya",
    subtitle: "A digital edition from the library collection",
    collection: "Islamic literature",
    coverImage: "/covers/432-adawlatul-makkiya.png",
    pdf: "/pdfs/Adawlatul%20Makkiya.pdf",
    fileName: "Adawlatul Makkiya.pdf",
  },
  {
    id: "seerate-mustafa-roman-urdu",
    title: "Seerate Mustafa (Roman Urdu)",
    subtitle: "Roman Urdu edition from the library collection",
    collection: "Seerah",
    coverImage: "/covers/seerate-mustafa-roman-urdu.png",
    pdf: "/pdfs/Seerate%20Mustafa%20(Roman%20Urdu).pdf",
    fileName: "Seerate Mustafa (Roman Urdu).pdf",
  },
];

export default function Home() {
  return (
    <main className="library-shell">
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
          <span className="header-note">A quiet place to read</span>
        </header>

        <section className="intro" aria-labelledby="library-title">
          <div>
            <p className="eyebrow">The digital majlis</p>
            <h1 id="library-title">A library for the seeking heart.</h1>
            <p className="intro-copy">
              Explore a growing collection of thoughtful works on faith,
              character, and the many paths toward a life of meaning.
            </p>
          </div>
          <div
            className="library-count"
            aria-label={`${books.length} books in the collection`}
          >
            <span>{String(books.length).padStart(2, "0")}</span>
            <small>
              books in
              <br />
              the collection
            </small>
          </div>
        </section>

        <div className="section-heading">
          <h2>Browse the shelves</h2>
          <span>Curated readings · PDF collection</span>
        </div>

        <section className="book-grid" aria-label="Library books">
          {books.map((book) => (
            <article className="book-card" key={book.id}>
              <div className="book-cover">
                <Image
                  className="book-cover-image"
                  src={book.coverImage}
                  alt={`Cover of ${book.title}`}
                  fill
                  sizes="(max-width: 540px) 100vw, (max-width: 800px) 50vw, 40vw"
                />
              </div>
              <div className="book-info">
                <p className="book-collection">{book.collection}</p>
                <h3>{book.title}</h3>
                <p className="book-subtitle">{book.subtitle}</p>
                <a
                  className="download-link"
                  href={book.pdf}
                  download={book.fileName}
                >
                  <span>Download PDF</span>
                  <span className="download-icon" aria-hidden="true">
                    ↓
                  </span>
                </a>
              </div>
            </article>
          ))}
        </section>

        <footer className="site-footer">
          <span>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</span>
          <span>Read slowly. Return often.</span>
        </footer>
      </div>
    </main>
  );
}
