'use client'

import BabyWalkLogo from "@/app/ui/logo";
import PcInfoArea from "@/app/ui/nav/pc-info-area";
import PhoneInfoArea from "@/app/ui/nav/phone-info-area";

export default function Navbar() {
    return (
        <nav className="bg-zinc-950 text-white p-2 grid grid-cols-3 items-center">
            <div>
                <PcInfoArea />
                <PhoneInfoArea/>
            </div>
            <BabyWalkLogo />
            <div/>
        </nav>
    );
}