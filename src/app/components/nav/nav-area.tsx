import {useEffect, useState} from "react";
import { Menu, X } from 'lucide-react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import clsx from 'clsx';

export function PcNavArea() {
    const path = usePathname();
    return (
        <div className="hidden md:flex justify-center">
            <nav className="flex flex-wrap justify-items-start gap-4">
                {[['Новости', '/news'], ['Контакты', '#contacts'], ['Документы', '#docs']].map((item) => (
                    <Link
                        key={item.at(0)}
                        href={`${item.at(1)}`}
                        className={clsx(
                            {
                                "underline": path === item.at(1),
                            }, "p-1 hover:bg-zinc-300 rounded-lg"
                        )}
                    >
                        {item.at(0)}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export function PhoneNavArea() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
    return (
        <div className="md:hidden block">
            <button onClick={() => setIsOpen(true)}>
                <Menu size={24} />
            </button>
            {/* Затемненный фон */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-zinc-950 bg-opacity-50"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
            {/* Выезжающее меню */}
            <div className={`fixed left-0 top-0 h-full w-3/4 bg-zinc-200 shadow-lg transform 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                transition-transform duration-300`}
            >
                <button className="p-4" onClick={() => setIsOpen(false)}>
                    <X size={24} color="black"/>
                </button>
                <nav className="p-4">
                    {[['На главную', '/'], ['Новости', '/news'], ['Контакты', '#contacts'], ['Документы', '#docs']]
                        .map((item) => (
                        <Link
                            key={item.at(0)}
                            href={`${item.at(1)}`}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                {
                                    "underline": path === item.at(1),
                                }, "block px-4 py-2 hover:bg-zinc-300"
                            )}
                        >
                            {item.at(0)}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>

    );
}