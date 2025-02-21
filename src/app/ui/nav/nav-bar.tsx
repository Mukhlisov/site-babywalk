'use client'

import React from "react";
import BabyWalkLogo from "@/app/ui/logo";
import PcInfoArea from "@/app/ui/nav/pc-info-area";

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <nav className = "bg-zinc-950 text-white p-2 flex items-center justify-between relative">
            <PcInfoArea />
            <BabyWalkLogo />
            <p/>
        </nav>
    );
}