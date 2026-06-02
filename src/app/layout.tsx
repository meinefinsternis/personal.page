import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const SITE_URL = "https://mnfstrns.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "meinefinsternis",
  description:
    "Personal site of meinefinsternis — links to portfolio, CV, Instagram, GitHub, and Strava.",
  keywords: ["meinefinsternis", "portfolio", "design", "cv"],
  authors: [{ name: "meinefinsternis", url: SITE_URL }],
  creator: "meinefinsternis",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "meinefinsternis",
    description:
      "Personal site of meinefinsternis — links to portfolio, CV, Instagram, GitHub, and Strava.",
    siteName: "meinefinsternis",
  },
  twitter: {
    card: "summary",
    title: "meinefinsternis",
    description:
      "Personal site of meinefinsternis — links to portfolio, CV, Instagram, GitHub, and Strava.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
