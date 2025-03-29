import {Geist, Geist_Mono, Montserrat_Alternates} from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    subsets: ["latin"],
});

export const montserratAlt = Montserrat_Alternates({
    subsets: ['cyrillic'],
    weight: '500'
})

export const panton = localFont({
    src: './Panton-Regular/Panton-Regular.woff2'

});
