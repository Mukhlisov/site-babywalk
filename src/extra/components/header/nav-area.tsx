import {useEffect, useState} from "react";
import {Menu, X} from 'lucide-react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import clsx from 'clsx';
import {useMenu} from "@/extra/components/header/menu-context";
import {ProgramsNav} from "@/extra/components/header/programs-nav";

const navTabs = [
    {entry : 'На главную', link : '/'},
    {entry : 'Контакты', link : '#contacts'},
    {entry : 'Документы', link : '#docs'}
];

export function PcNavArea() {
    const path = usePathname();

    return (
        <div className="hidden lg:flex justify-center">
            <nav className="flex flex-wrap justify-items-start">
                {navTabs.slice(1).map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className={`${path === item.link ? 'bg-primary-green text-zinc-50' : 'hover:bg-zinc-200'} 
                                    p-2 transition duration-200 flex items-center
                                    `}
                    >
                        {item.entry}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export function PhoneNavArea() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { isRevealed, toggleMenu } = useMenu();

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

    const toggleClose = () => {
        if (isRevealed) toggleMenu();
        setIsOpen(false);
    }

    return (
        <div className="lg:hidden block">
            <button onClick={() => setIsOpen(true)}>
                <Menu size={24} />
            </button>
            <div
                className={clsx(
                    'fixed inset-0 bg-zinc-950/50',
                    {
                        'opacity-100': isOpen,
                        'opacity-0': !isOpen,
                        'pointer-events-none': !isOpen,
                    },
                    'transition-opacity duration-300 ease-in-out'
                )}
                onClick={toggleClose}
            ></div>
            <div
                className={clsx(
                    'fixed left-0 top-0 h-full w-3/4 bg-zinc-100 shadow-lg transform',
                    {
                        'translate-x-0': isOpen,
                        '-translate-x-full': !isOpen,
                    },
                    'transition-all duration-300 ease-in-out'
                )}
            >
                <button className="p-4" onClick={toggleClose}>
                    <X size={24} color="black" />
                </button>
                <nav className="p-4">
                    {navTabs.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            onClick={toggleClose}
                            className={`${path === item.link ? 
                                        'bg-primary-green text-zinc-50' : 
                                        'bg-transparent active:bg-zinc-200'} 
                                        transition-colors duration-200 ease-in-out
                                        block px-4 py-2
                                        `}
                        >
                            {item.entry}
                        </Link>
                    ))}
                    <button className={`${path.includes('programs') ?
                                        'bg-primary-green text-zinc-50 active:bg-lime-600':
                                        'bg-transparent active:bg-zinc-200'
                                        }
                                        transition-colors duration-200 ease-in-out
                                        block px-4 py-2 w-full text-start border-zinc-950
                                        ${isRevealed ? 'border-b' : ''}
                                        `}
                            onClick={toggleMenu}
                    >
                        Программы
                    </button>
                    <div onClick={toggleClose}>
                        <ProgramsNav/>
                    </div>
                </nav>
            </div>
        </div>
    );
}