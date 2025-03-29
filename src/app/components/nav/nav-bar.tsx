'use client'

import BabyWalkLogo from "@/app/components/nav/logo";
import {PcNavArea, PhoneNavArea} from "@/app/components/nav/nav-area";

export default function Navbar() {

    return (
        <nav className="bg-zinc-50 shadow-lg shadow-zinc-400 p-2 grid grid-cols-3 items-center fixed w-full z-50">
            <div>
                <PcNavArea/>
                <PhoneNavArea/>
            </div>
            <BabyWalkLogo/>
            <div/>
        </nav>
    );
}