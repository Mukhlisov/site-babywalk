import type {Metadata} from "next";
import {panton} from '@/app/ui/fonts';
import BackgroundImage from '@/app/components/background';
import ThanksMessage from "@/app/components/modals/thanks-message";

import "@/app/ui/globals.css";
import Navbar from "@/app/components/nav/nav-bar";
import Footer from "@/app/components/footer/footer";

export const metadata: Metadata = {
    title: "АНО Движение детям",
    icons: "/favicon.ico",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="ru">
        <body className={`${panton.className} antialiased text-zinc-950 text-base`}>
        <Navbar/>
        <ThanksMessage/>
        <div className="relative min-h-screen flex justify-center">
            <BackgroundImage/>
            <main className="relative w-full md:w-3/4 bg-zinc-50 pt-[80px] md:pt-[100px]">
                {children}
            </main>
        </div>
        <Footer/>
        </body>
        </html>
    );
}
