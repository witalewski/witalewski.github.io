import type { Metadata } from "next";
import { Lato } from "next/font/google";
import PaperBackground from "./paper-background";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Chris Witalewski",
  description: "Software Engineer - Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} text-zinc-900 dark:text-zinc-300`}
      >
        <PaperBackground />
        {children}
      </body>
    </html>
  );
}
