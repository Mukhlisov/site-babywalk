import BabyWalkLogo from "@/extra/components/header/logo";
import {PcNavArea, PhoneNavArea} from "@/extra/components/header/nav-area";
import Payments from "@/extra/components/header/payment";

export default function Header() {
    return (
        <header id={"header"} className="fixed bg-zinc-50 w-full z-20 shadow-lg shadow-zinc-400">
            <div className="p-2 lg:px-0 grid grid-cols-3 items-center">
                <div>
                    <PcNavArea/>
                    <PhoneNavArea/>
                </div>
                <BabyWalkLogo/>
                <Payments/>
            </div>
        </header>
    );
}