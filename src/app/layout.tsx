import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { geistSans, geistMono } from '@/app/ui/fonts';
import Navbar from "@/app/ui/nav/nav-bar";

export const metadata: Metadata = {
  title: "Some title",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
