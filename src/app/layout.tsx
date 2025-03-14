import "@/app/globals.css";
import { Header } from "@/components/layout/header";
import { inter } from "@/util/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MOODS TEST",
  description: "incredibleness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
