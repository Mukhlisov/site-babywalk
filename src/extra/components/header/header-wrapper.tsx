'use client'

import {MenuProvider} from "@/extra/components/header/menu-context";
import Header from "@/extra/components/header/header";

export function HeaderWrapper() {
    return (
        <MenuProvider>
            <Header/>
        </MenuProvider>
    );
}