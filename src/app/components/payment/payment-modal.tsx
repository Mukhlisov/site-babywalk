import {useEffect, useState} from "react";
import {FixModalOpen} from "@/app/utils/modal-helper";
import {X} from "lucide-react";
import Image from "next/image";
import {PaymentForm} from "@/app/components/payment/payment-form";

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
            <button className={`p-1 px-2 rounded-sm bg-lime-700 text-zinc-50 text-sm
                    md:text-zinc-950 md:bg-transparent md:px-3 md:rounded-md md:hover:text-zinc-50 md:hover:bg-lime-700 md:text-base
                    active:scale-105
                    transition-all duration-300 ease-in-out`}
                    onClick={openModal}
            >
                Помочь
            </button>
            <div className={`fixed z-20 flex justify-center left-0 top-0 w-full h-dvh bg-zinc-800/50 
                    ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"} transform transition-opacity duration-300 ease-in-out`}>

                <div className={`flex flex-row flex-wrap justify-center gap-4 p-4 mx-4 bg-zinc-50 rounded-lg z-30 mt-[10vh]
                        ${isOpen ? "" : "-translate-y-[50vh]"} transform transition-transform duration-300 ease-in-out
                        max-h-[70vh] md:max-h-[400px] overflow-y-auto
                        `}>

                    {/*From*/}
                    <div className={`flex flex-col gap-4 p-2 rounded-lg w-[350px]
                                    bg-gradient-to-br from-green-100 to-amber-100`}
                    >
                        <nav className={"flex flex-row gap-2 justify-end items-baseline"}>
                            <h4 className={"md:text-lg"}>Благотворительное пожертвование</h4>
                            <X size={24} color="black" className="cursor-pointer" onClick={closeModal} />
                        </nav>
                        <div className={"my-auto"}>
                            <PaymentForm/>
                        </div>
                    </div>
                    {/*QR*/}
                    <section className={`flex flex-col items-center gap-4 p-2 rounded-lg w-[350px]
                            bg-gradient-to-tr md:bg-gradient-to-bl from-green-100 to-amber-100
                            `}
                    >
                        <h4 className={"md:text-lg text-center text-pretty"}>
                            Или отсканируйте из приложения банка
                        </h4>
                        <div className={"flex justify-center items-center my-auto"}>
                            <Image
                                src={"/payment-qr.jpg"}
                                alt={"payment-qr"}
                                width={225}
                                height={225}
                                loading={"lazy"}
                                className={"rounded-md"}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}