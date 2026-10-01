This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO Configuration

The canonical production URL is configured as `https://books.durood.live`.
The app generates page metadata, canonical URLs, Open Graph metadata, JSON-LD
book data, `sitemap.xml`, and `robots.txt`. The sitemap is available at
`/sitemap.xml` after deployment.

## Download Tracking

Downloads are counted through a server-only Appwrite integration. Configure the
variables in `.env.example` in the deployment environment. The Appwrite
database collection must contain one document per book, with the document ID
matching the book's `downloadCounterId` value and a numeric `downloadCount`
attribute initialized to `0`. Counter document IDs may be shorter than public
book slugs because Appwrite limits document IDs to 36 characters.

The API key must have permission to update documents in this collection. Do
not expose it as a `NEXT_PUBLIC_` variable.
