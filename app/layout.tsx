import type { Metadata } from "next";
import { Geist } from "next/font/google";
import NavBar from "./components/NavBar";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

// The real page title and description for browser tabs and search results.
// Pages can set their own title; the template adds " · NextBites" after it.
export const metadata: Metadata = {
  title: {
    default: "NextBites · Easy recipes from around the world",
    template: "%s · NextBites",
  },
  description:
    "NextBites is a recipe website built with Next.js and TypeScript. Search 8 easy recipes by name or cuisine and open each one for its ingredients and steps.",
  applicationName: "NextBites",
  openGraph: {
    title: "NextBites",
    description: "Search easy recipes from around the world and cook them step by step.",
    type: "website",
  },
};

// The root layout wraps every page. The NavBar sits here, and each page
// is rendered in place of {children}.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <NavBar />
        <main className="container">{children}</main>
        <footer className="footer">NextBites · made with Next.js and TypeScript</footer>
      </body>
    </html>
  );
}
