import type { Metadata } from "next";
import { montserratAlt, geistSans } from '@/app/ui/fonts';

import "@/app/ui/globals.css";
import Navbar from "@/app/ui/nav/nav-bar";
import Footer from "@/app/ui/footer/footer";

export const metadata: Metadata = {
  title: "АНО Движение детям",
  description: "Описание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserratAlt.className} ${geistSans.className} antialiased text-[1.2rem]`}>
        <Navbar />
        <div className="min-h-[900px] text-center items-center justify-center w-full">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
