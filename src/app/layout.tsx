import type {Metadata} from "next";
import {zapusSans} from "@/extra/styles/fonts";
import BackgroundImage from "@/extra/components/background";

import "@/extra/styles/globals.css";
import Footer from "@/extra/components/footer/footer";
import {HeaderWrapper} from "@/extra/components/header/header-wrapper";

export const metadata: Metadata = {
    title: "АНО Движение детям",
    icons: "/favicon.ico",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="ru" data-scroll-behavior="smooth">
        <body className={`${zapusSans.className} antialiased text-zinc-950 text-base`}>
        <HeaderWrapper/>
        <div className="relative min-h-screen flex justify-center">
            <BackgroundImage/>
            <div className="relative w-full md:w-3/4 bg-zinc-50 pt-12.5 md:pt-22.5">
                {children}
            </div>
        </div>
        <Footer/>
        <script src="https://widgets.donation.ru/wloader/262e64fb-42ee-46b1-816e-af9b9763609d/wloader.js" defer/>
        </body>
        </html>
    );
}
