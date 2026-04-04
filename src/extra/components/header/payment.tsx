'use client';

import PaymentWidget from "@/extra/components/modals/payment/payment-modal";
import {settings} from "@/extra/settings/settings";
import {useEffect, useState} from "react";

export default function Payments() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= settings.mobilePhoneWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isMobile === null) {
        return <PaymentWidget/>;
    }

    return (isMobile ? <PaymentPageButton/> : <PaymentWidget/>);
}

const PaymentPageButton = () => (
    <div className="flex flex-row justify-end md:justify-center">
        <a className={`p-1 px-2 md:p-2 rounded-sm bg-primary-green text-zinc-50 text-sm md:text-base hover:bg-lime-600 
                    active:scale-105
                    transition-all duration-200 ease-in-out`}
              href={'/donation'}

        >
            Помочь
        </a>
    </div>
);