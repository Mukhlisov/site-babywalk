import BabyWalkLogo from "@/app/components/header/logo";
import {PcNavArea, PhoneNavArea} from "@/app/components/header/nav-area";
import PaymentWidget from "@/app/components/modals/payment/payment-modal";
import {ProgramsNav} from "@/app/components/header/programs-nav";

export default function Header() {
    return (
        <header id={"header"} className="fixed bg-zinc-50 w-full z-20 shadow-lg shadow-zinc-400">
            <div className="p-2 lg:px-0 grid grid-cols-3 items-center">
                <div>
                    <PcNavArea/>
                    <PhoneNavArea/>
                </div>
                <BabyWalkLogo/>
                <PaymentWidget/>
            </div>
            <div className={`absolute hidden lg:block w-1/2 z-10`}>
                <ProgramsNav/>
            </div>
        </header>
    );
}