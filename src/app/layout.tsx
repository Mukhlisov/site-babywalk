import type {Metadata} from "next";
import {panton} from '@/app/ui/fonts';
import BackgroundImage from '@/app/components/background';
import ThanksMessage from "@/app/components/modals/thanks/thanks-message";

import "@/app/ui/globals.css";
import Footer from "@/app/components/footer/footer";
import {HeaderWrapper} from "@/app/components/header/header-wrapper";

export const metadata: Metadata = {
    title: "АНО Движение детям",
    icons: "/favicon.ico",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="ru">
        <body className={`${panton.className} antialiased text-zinc-950 text-base`}>
        <HeaderWrapper/>
        <ThanksMessage/>
        <div className="relative min-h-screen flex justify-center">
            <BackgroundImage/>
            <div className="relative w-full md:w-3/4 bg-zinc-50 pt-[50px] md:pt-[90px]">
                {children}
            </div>
        </div>
        <Footer/>
        <script src="https://widgets.donation.ru/wloader/262e64fb-42ee-46b1-816e-af9b9763609d/wloader.js" async/>
        </body>
        </html>
    );
}
