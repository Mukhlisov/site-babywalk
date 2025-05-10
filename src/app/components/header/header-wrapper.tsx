'use client'

import {MenuProvider} from "@/app/components/header/menu-context";
import Header from "@/app/components/header/header";

export function HeaderWrapper() {
    return (
        <MenuProvider>
            <Header/>
        </MenuProvider>
    );
}