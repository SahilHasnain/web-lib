import { NextResponse } from "next/server";
import { getBook } from "../../../../lib/books";
import { getAppwriteDownloads } from "../../../../lib/appwrite";
import { absoluteUrl } from "../../../../lib/site";

type DownloadRouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: DownloadRouteContext) {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  try {
    const { databases, databaseId, collectionId } = getAppwriteDownloads();

    await databases.incrementDocumentAttribute(
      databaseId,
      collectionId,
      book.downloadCounterId,
      "downloadCount",
      1,
    );
  } catch (error) {
    console.error(`Unable to record download for ${book.slug}`, error);
  }

  return NextResponse.redirect(absoluteUrl(book.pdf));
}
