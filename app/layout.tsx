import type { Metadata } from "next";
import { Geist } from "next/font/google";
import NavBar from "./components/NavBar";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextBites",
  description: "Discover simple, tasty recipes from around the world.",
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
