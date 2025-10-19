import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ArtifactScript } from "@artifact-ui/core";
import { Providers } from "./providers";
import "@artifact-ui/core/styles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artifact UI - Lightweight React Components",
  description:
    "Lightweight React components built on Radix primitives with full TypeScript support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ArtifactScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
