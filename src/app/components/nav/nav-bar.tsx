'use client'

import BabyWalkLogo from "@/app/components/nav/logo";
import {PcNavArea, PhoneNavArea} from "@/app/components/nav/nav-area";
import PaymentWidget from "@/app/components/modals/payment/payment-modal";

export default function Navbar() {

    return (
        <nav id={"top-nav"} className="bg-zinc-50 shadow-lg shadow-zinc-400 p-2 grid grid-cols-3 items-center fixed w-full z-50">
            <div>
                <PcNavArea/>
                <PhoneNavArea/>
            </div>
            <BabyWalkLogo/>
            <PaymentWidget/>
        </nav>
    );
}