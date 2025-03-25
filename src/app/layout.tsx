import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dominik - AI & Data Engineering Portfolio",
  description: "Senior Machine Learning Engineer with +10 years of experience in AI, ML, and Data Engineering. Specializing in GenAI, cloud platforms, and building scalable data products.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  verification: {
    google: 'none',
    yandex: 'none',
    yahoo: 'none',
    other: {
      'msvalidate.01': 'none',
    },
  },
  alternates: {
    canonical: null,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://assets.onedollarstats.com/stonks.js"
          defer
          strategy="afterInteractive"
        />
      </head>
      <body className={`${firaCode.className} terminal-background`}>
        {children}
      </body>
    </html>
  );
}
