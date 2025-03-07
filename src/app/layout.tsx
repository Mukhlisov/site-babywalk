import type { Metadata } from "next";
import { montserratAlt, geistSans } from '@/app/ui/fonts';

import "@/app/ui/globals.css";
import Navbar from "@/app/ui/nav/nav-bar";
import Footer from "@/app/ui/footer/footer";

export const metadata: Metadata = {
  title: "АНО Движение детям",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserratAlt.className} ${geistSans.className} antialiased text-zinc-950`}>
        <Navbar/>
        <div className="min-h-screen flex justify-center backdrop-blur-[5px]">
          <main className="w-full md:w-3/4 shadow-2xl min-h-fit bg-zinc-50/90 pt-[80px] md:pt-[100px]">
            {children}
          </main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
