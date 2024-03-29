import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Providers from "src/Providers";

import "./globals.css";

const inter = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "To do",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
