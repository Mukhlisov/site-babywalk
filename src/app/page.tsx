'use client'
import {useState, useEffect} from 'react'
import {X} from 'lucide-react';
import Programs from "@/app/components/home/programs";
import About from "@/app/components/home/about";
import {PaymentForm} from "@/app/components/home/payment";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.history.pushState({ modalOpen: true }, '');
        } else {
            document.body.style.overflow = 'auto';
        }

        const handlePopState = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('popstate', handlePopState);
        };
    }, [isOpen]);

    const openModal = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    }

    const closeModal = () => {
        if (isOpen) {
            setIsOpen(false);
            if (window.history.state?.modalOpen) {
                window.history.back();
            }
        }
    }

    return (
        <div className="relative p-1">
            <div className={`fixed z-20 flex items-end justify-center left-0 top-0 w-full h-dvh bg-zinc-800/50 
                ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"} transform transition-opacity duration-[250ms] ease-in-out`}>
                <div className={`flex flex-col gap-2 p-6 bg-zinc-100 rounded-lg mb-16 z-30
                    ${isOpen ? "" : "translate-y-[50vh]"} transform transition-transform duration-[250ms] ease-in-out`}>
                    <X size={24} color="black" className="self-end cursor-pointer" onClick={closeModal} />
                    <PaymentForm />
                </div>
            </div>

            <About/>
            <Programs/>

            <div className="grid grid-cols-1 my-16">
                <div className="flex justify-center">
                    <button
                        className="text-center border border-zinc-900 rounded w-[140px] h-[70px] m-2 p-1
                            transition md:hover:bg-lime-600 active:bg-lime-600 duration-300"
                        onClick={openModal}
                    >
                        Помочь
                    </button>
                </div>
            </div>
        </div>
    );
}