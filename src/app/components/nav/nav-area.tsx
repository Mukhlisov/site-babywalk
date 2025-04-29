import {useEffect, useState} from "react";
import { Menu, X } from 'lucide-react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import clsx from 'clsx';

export function PcNavArea() {
    const path = usePathname();
    return (
        <div className="hidden lg:flex justify-center">
            <nav className="flex flex-wrap justify-items-start gap-4">
                {[['Новости', '/news'], ['Контакты', '#contacts'], ['Документы', '#docs']].map((item) => (
                    <Link
                        key={item.at(0)}
                        href={`${item.at(1)}`}
                        className={clsx(
                            {
                                "underline": path === item.at(1),
                            }, "p-1 hover:bg-zinc-300 transition duration-150 rounded-lg"
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
                onClick={() => setIsOpen(false)}
            ></div>
            <div
                className={clsx(
                    'fixed left-0 top-0 h-full w-3/4 bg-zinc-200 shadow-lg transform',
                    {
                        'translate-x-0': isOpen,
                        '-translate-x-full': !isOpen,
                    },
                    'transition-all duration-300 ease-in-out'
                )}
            >
                <button className="p-4" onClick={() => setIsOpen(false)}>
                    <X size={24} color="black" />
                </button>
                <nav className="p-4">
                    {[
                        ['На главную', '/'],
                        ['Новости', '/news'],
                        ['Контакты', '#contacts'],
                        ['Документы', '#docs'],
                    ].map((item) => (
                        <Link
                            key={item[0]}
                            href={item[1]}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                {
                                    underline: path === item[1],
                                },
                                'block px-4 py-2 hover:bg-zinc-300'
                            )}
                        >
                            {item[0]}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}