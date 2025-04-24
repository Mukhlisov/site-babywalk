import type { Metadata } from "next";
import { panton } from '@/app/ui/fonts';

import "@/app/ui/globals.css";
import Navbar from "@/app/components/nav/nav-bar";
import Footer from "@/app/components/footer/footer";

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
      <body className={`${panton.className} antialiased text-zinc-950 text-adaptive`}>
        <Navbar/>
        <div className="min-h-screen flex justify-center backdrop-blur-[5px]">
          <main className="w-full md:w-3/4 shadow-2xl min-h-fit bg-zinc-50 pt-[80px] md:pt-[100px]">
            {children}
          </main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
