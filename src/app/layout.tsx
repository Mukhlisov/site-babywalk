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
        <Navbar/>
        {/*переделать блюр (backdrop-filter or filter)*/}
        <div className="min-h-[900px] flex justify-center bg-amber-50 bg-opacity-50">
          <main className="w-full md:w-3/4 shadow-2xl min-h-fit bg-amber-50 bg-opacity-90">
            {children}
          </main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
