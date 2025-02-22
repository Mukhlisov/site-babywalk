'use client'

import BabyWalkLogo from "@/app/ui/logo";
import {PcNavArea, PhoneNavArea} from "@/app/ui/nav/nav-area";

export default function Navbar() {

    return (
        <nav className="bg-zinc-800 text-white p-2 grid grid-cols-3 items-center">
            <div>
                <PcNavArea/>
                <PhoneNavArea/>
            </div>
            <BabyWalkLogo />
            <div/>
        </nav>
    );
}