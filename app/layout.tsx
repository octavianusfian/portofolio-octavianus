import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Fian.dev — Fullstack Developer",
  description:
    "Portfolio of Octavianus Fian, a Fullstack Developer specializing in React, Next.js, Tailwind CSS, and modern web development.",
  keywords: [
    "Fian.dev",
    "Octavianus Fian",
    "Frontend Developer",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "JavaScript",
    "Tailwind CSS",
  ],
  creator: "Octavianus Fian",
  publisher: "Fian.dev",
  openGraph: {
    title: "Fian.dev — Fullstack Developer",
    description:
      "React & Next.js Fullstack Developer. Explore my projects, skills, and experience.",
    siteName: "Fian.dev",
    url: "https://portofolio-octavianus.vercel.app",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png", // put your OG image here
        width: 1200,
        height: 630,
        alt: "Fian.dev — Fullstack Developer Portfolio",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
