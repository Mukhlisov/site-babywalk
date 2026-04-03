import {motion} from "framer-motion";
import {programsData} from "@/app/programs/components/programs-data";
import {useMenu} from "@/app/components/header/menu-context";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function ProgramsNav() {
    const {isRevealed} = useMenu();
    const path = usePathname();
    return (
        <motion.div
            initial={isRevealed}
            animate={isRevealed ? {height: 'auto'} : {height: 0}}
            transition={{duration: 0.6, ease: 'circInOut'}}
            className={`absolute overflow-hidden
                        mr-4
                        bg-transparent lg:bg-zinc-50
                        lg:shadow-[5px_15px_10px_-5px] lg:shadow-zinc-400
                        `}
        >
            {programsData.map((data, index) => (
                <Link key={index}
                      href={data.link}
                      className={`block lg:text-lg text-pretty px-4 py-2
                                ${path === data.link ? 
                                'bg-primary-green text-zinc-50' : 
                                'bg-transparent lg:hover:bg-zinc-200 active:bg-zinc-200'
                                }
                                transition-colors duration-200 ease-in-out
                                `}
                >
                    {data.entry}
                </Link>
            ))}
        </motion.div>
    );
}