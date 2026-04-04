import {useEffect, useState} from "react";
import {FixModalOpen} from "@/app/components/modals/modal-helper";
import {X} from "lucide-react";
import Image from "next/image";

export default function PaymentWidget() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        FixModalOpen(isOpen);
        if (isOpen)
            window.history.pushState({ modalOpen: true }, '');

        const handlePopState = () => {
            if (!isOpen) return;
            setIsOpen(false);
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            FixModalOpen(false);
            window.removeEventListener('popstate', handlePopState);
        };
    }, [isOpen]);

    const openModal = () => {
        if (isOpen) return;
        setIsOpen(true);
    }

    const closeModal = () => {
        if (!isOpen) return;
        setIsOpen(false);
        if (window.history.state?.modalOpen) {
            window.history.back();
        }
    }

    return(
        <div className="flex flex-row justify-end md:justify-center items-center">
            <button className={`p-1 px-2 md:p-2 rounded-sm bg-primary-green text-zinc-50 text-sm md:text-base md:hover:bg-lime-600 
                    active:scale-105
                    transition-all duration-200 ease-in-out`}
                    onClick={openModal}
            >
                Помочь
            </button>
            <div className={`fixed z-20 flex justify-center left-0 top-0 w-full h-dvh bg-zinc-800/50 
                    ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"} transform transition-opacity duration-300 ease-in-out`}>

                <div className={`z-30 mt-[10vh] max-h-[70vh] max-w-[94vw]`}>
                    <nav className={"flex flex-row gap-2 justify-between items-baseline bg-white rounded-lg p-4"}>
                        <h4 className={"md:text-lg"}>Благотворительное пожертвование</h4>
                        <X size={24} color="black" className="cursor-pointer" onClick={closeModal} />
                    </nav>

                    <section className={'flex flex-row flex-wrap justify-start gap-4 mt-6'}>
                        {/*From*/}
                        <div className={'w-110'} id='1097bb56-b272-4282-bb82-e48a9c898929' data-type='mixplat-form'/>
                        {/*QR*/}
                        <div className={'hidden md:block'}>
                            <Image src="https://qr.donation.ru/qr/15689/IlPI7moI_main.svg" alt="Donation.ru" width={300} height={300} className={'rounded-3xl'}/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}