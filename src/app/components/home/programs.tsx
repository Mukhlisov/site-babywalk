import Link from "next/link";
import {ChevronsRight} from 'lucide-react';
import Image from "next/image";

export default function Programs() {
    const props: ProgramCardProps[] = [
        new ProgramCardPropsImpl('Служба домашнего визитирования (длительное ведение семьи)', 'Home Visiting', '/home-visiting.jpg', '/home-visiting'),
        new ProgramCardPropsImpl('Движение BabyWalk Удмуртия', 'Baby Walk', '/baby-walk.jpg', '/baby-walk'),
        new ProgramCardPropsImpl('Образовательная деятельность в области реабилитации', 'Education', '/education.jpeg', '/education'),
        new ProgramCardPropsImpl('Аренда и ремонт технических средств реабилитации', 'Technical means of rehabilitation', '/tmr.jpg', '/tmr'),
    ];
    return (
        <div className="px-6 my-8">
            <p className="text-[1.5rem] text-center font-bold">
                Программы
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-y-4 gap-x-6 mt-5">
                {props.map((prop, index) => (
                    <ProgramCard key={index} entry={prop.entry} alt={prop.alt} src={prop.src} link={prop.link}/>
                ))}
            </div>
        </div>
    );
}

function ProgramCard(prop: ProgramCardProps) {
    return (
        <Link className="flex flex-row min-w-[200px] pt-4 transition duration-150 ease-linear hover:scale-[101%] active:scale-105"
              href={"/programs" + prop.link}
        >
            <div className="py-1">
                <Image
                    src={prop.src}
                    alt={prop.alt}
                    width={250}
                    height={250}
                />
            </div>
            <div className="relative">
                <div
                    className="absolute flex justify-center -translate-x-1/2 h-full min-w-[55px] bg-lime-700 -skew-x-[0.20rad] shrink">
                    <div className="w-2 h-full bg-zinc-50 -skew-x-6"/>
                </div>
                <div className="flex items-end justify-end h-full max-w-[250px] bg-zinc-100 p-4">
                    <div className="flex flex-col items-end gap-1 w-[85%]">
                        <p className="text-end text-pretty text-sm md:text-base">
                            {prop.entry}
                        </p>
                        <ChevronsRight size={24} color="white" className="bg-lime-700 rounded-sm p-1"/>
                    </div>
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