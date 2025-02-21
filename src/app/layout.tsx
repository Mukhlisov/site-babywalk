import type { Metadata } from "next";
import { montserratAlt, geistSans } from '@/app/ui/fonts';

import "@/app/ui/globals.css";
import Navbar from "@/app/ui/nav/nav-bar";
import Footer from "@/app/ui/footer/footer";

export const metadata: Metadata = {
  title: "Заголовок",
  description: "Описание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserratAlt.className} ${geistSans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
