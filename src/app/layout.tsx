import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const SITE_URL = "https://i.am.mnfstrns.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "meinefinsternis",
  description:
    "Personal site of meinefinsternis — links to portfolio, CV, Instagram, and Spotify.",
  keywords: ["meinefinsternis", "portfolio", "design", "cv"],
  authors: [{ name: "meinefinsternis", url: SITE_URL }],
  creator: "meinefinsternis",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "meinefinsternis",
    description:
      "Personal site of meinefinsternis — links to portfolio, CV, Instagram and Spotify.",
    siteName: "meinefinsternis",
  },
  twitter: {
    card: "summary",
    title: "meinefinsternis",
    description:
      "Personal site of meinefinsternis — links to portfolio, CV, Instagram and Spotify.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "xMYSUyLFE74bmKBwaSWObKr97bXpFbkQRNmYbBWddI0",
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
