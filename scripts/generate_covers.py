"""Render the first page of every library PDF as a cover thumbnail."""

from pathlib import Path
import re
import sys

try:
    import fitz
except ImportError:
    print("Missing dependency: install PyMuPDF with `python -m pip install pymupdf`.")
    sys.exit(1)


PROJECT_ROOT = Path(__file__).resolve().parents[1]
PDF_DIRECTORY = PROJECT_ROOT / "public" / "pdfs"
COVER_DIRECTORY = PROJECT_ROOT / "public" / "covers"
RENDER_SCALE = 1.8


def slugify(file_name: str) -> str:
    """Create a stable URL-friendly filename from a PDF filename."""
    stem = Path(file_name).stem.lower()
    return re.sub(r"[^a-z0-9]+", "-", stem).strip("-")


def generate_cover(pdf_path: Path) -> Path:
    output_path = COVER_DIRECTORY / f"{slugify(pdf_path.name)}.png"

    with fitz.open(pdf_path) as document:
        if not document.page_count:
            raise ValueError(f"PDF has no pages: {pdf_path.name}")

        page = document.load_page(0)
        pixmap = page.get_pixmap(
            matrix=fitz.Matrix(RENDER_SCALE, RENDER_SCALE),
            alpha=False,
        )
        pixmap.save(output_path)

    return output_path


def main() -> None:
    pdfs = sorted(PDF_DIRECTORY.glob("*.pdf"))
    if not pdfs:
        print(f"No PDF files found in {PDF_DIRECTORY}")
        return

    COVER_DIRECTORY.mkdir(parents=True, exist_ok=True)
    for pdf_path in pdfs:
        output_path = generate_cover(pdf_path)
        print(f"Generated {output_path.relative_to(PROJECT_ROOT)}")


if __name__ == "__main__":
    main()