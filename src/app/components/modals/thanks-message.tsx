'use client'
import { X } from "lucide-react";
import {useEffect, useState} from "react";

export default function ThanksMessage() {
    const [isOpen, setIsOpen] = useState(false);
    const [closePressed, setClosePressed] = useState(false);

    useEffect(() => {
        const thanks = window.location.href.includes("#thanks");
        if (thanks && !closePressed)
            setIsOpen(true);
        else
            setIsOpen(false);
    }, [closePressed]);

    const handlePopupClose = () => {
        setClosePressed(true);
    }

    return (
        <div className={`fixed z-30
                        left-1/2 -translate-x-1/2 w-[96vw] md:w-auto
                        rounded-2xl shadow-md shadow-zinc-950/40
                        bg-transparent backdrop-blur-xl
                        ${isOpen ? 'translate-y-[20vh]' : '-translate-y-[40vh]'}
                        transform duration-300 ease-out
                        `}
        >
            <div className={`grid grid-rows-2 gap-2 divide-solid divide-y-[1px] divide-zinc-950 rounded-lg
                            bg-zinc-50/60 m-6 p-4 
                            `}
            >
                <div className={`flex flex-row justify-between mt-2 mx-2`}>
                    <h3 className={`text-lg md:text-xl`}>
                        Пожертвование получено
                    </h3>
                    <X size={28} color={"white"}
                       className={`bg-gradient-to-br from-30% from-lime-300 to-amber-200
                                   rounded-sm cursor-pointer active:scale-105 transform duration-200 ease-in-out
                       `}
                       onClick={() => handlePopupClose()}
                    />
                </div>
                <div className={`py-2 px-2`}>
                    <p className={"text-base md:text-lg"}>
                        Ваше пожертвование получено. Спасибо!
                    </p>
                </div>
            </div>
        </div>
    );
}