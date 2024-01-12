import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Krzysztof Adam Witalewski",
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
        className={`${lato.className} bg-zinc-50 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-300`}
      >
        {children}
      </body>
    </html>
  );
}
