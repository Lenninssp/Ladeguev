import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ladeguev",
  description: "Music for all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(bebas.className, roboto.className)}>
        <div className="h-screen w-screen bg-black">{children}</div>
      </body>
    </html>
  );
}