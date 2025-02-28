import Image from "next/image";
import Link from "next/link";
import {ChevronsRight} from 'lucide-react';

export default function Programs() {
    const props : ProgramCardProps[] = [
        new ProgramCardPropsImpl('Служба домашнего визитирования', 'Home Visiting', '/home-visiting.jpg', '/home-visiting'),
        new ProgramCardPropsImpl('Движение BabyWalk Удмуртия', 'Baby Walk', '/baby-walk.jpg', '/baby-walk'),
        new ProgramCardPropsImpl('Образование специалистов', 'Education', '/education.jpeg', '/education'),
        new ProgramCardPropsImpl('Поддержка отечественных разработок ТСР', 'Supports for domestic developments', '/devs-support.jpg', '/devs-support'),
    ];
    return (
        <div className="px-6 my-8">
            <p className="text-[1.5rem] text-center font-bold">
                Программы
            </p>
            <div className="flex flex-row flex-wrap justify-center divide-y-2 divide-zinc-950 md:divide-none gap-4 mt-5">
                {props.map((prop, index) => (
                    <ProgramCard key={index} entry={prop.entry} alt={prop.alt} src={prop.src} link={prop.link} />
                ))}
            </div>
        </div>
    );
}

export function ProgramCard( prop: ProgramCardProps) {
    return (
        <Link className="overflow-hidden flex flex-row min-w-[200px] pt-4 md:pt-0 transition duration-200 ease-linear active:scale-105"
              href={"/programs" + prop.link}
        >
            <div className="py-2">
                <Image className="shadow-sm shadow-zinc-950/40"
                    src={prop.src}
                    alt={prop.alt}
                    width={250}
                    height={250}
                />
            </div>
            <div className="relative z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full min-w-[55px] bg-lime-600 -skew-x-12 flex items-center justify-center">
                    <div className="w-2 h-full bg-zinc-50 -skew-x-6"/>
                </div>
            </div>
            <div className="flex flex-col justify-end md:justify-center h-full w-[250px] bg-zinc-50 pb-4 md:pb-0">
                <div className="flex flex-col items-end gap-1 px-4">
                    <p className="text-end text-wrap text-[0.9rem] md:text-[1rem]">
                        {prop.entry}
                    </p>
                    <ChevronsRight size={24} color="white" className="bg-lime-600 rounded-sm p-1"/>
                </div>
            </div>
        </Link>
    );
}

interface ProgramCardProps {
    entry: string;
    alt: string;
    src: string;
    link: string
}

class ProgramCardPropsImpl implements ProgramCardProps {
    constructor(entry: string, alt: string, src: string, link: string) {
        this.entry = entry;
        this.alt = alt;
        this.src = src;
        this.link = link;
    }

    entry: string;
    alt: string;
    src: string;
    link: string
}