import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl } from "../lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Bayt Al-Ilm | House of Knowledge",
    template: "%s | Bayt Al-Ilm",
  },
  description:
    "Bayt Al-Ilm is a quiet Islamic digital library for thoughtful reading and Seerah books.",
  applicationName: "Bayt Al-Ilm",
  authors: [{ name: "Bayt Al-Ilm" }],
  creator: "Bayt Al-Ilm",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Bayt Al-Ilm",
    title: "Bayt Al-Ilm | House of Knowledge",
    description:
      "A quiet Islamic digital library for thoughtful reading and Seerah books.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
