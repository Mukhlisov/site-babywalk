import Link from "next/link";
import {ChevronsRight} from 'lucide-react';
import Image from "next/image";
import {ProgramsData, programsData} from "@/app/programs/components/programs-data";

export default function Programs() {
    return (
        <div className="px-6 my-8">
            <p className="text-[1.5rem] text-center font-bold">
                Программы
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-y-4 gap-x-6 mt-5">
                {programsData.map((data, index) => (
                    <ProgramCard key={index} entry={data.entry} alt={data.alt} src={data.src} link={data.link}/>
                ))}
            </div>
        </div>
    );
}

function ProgramCard({entry, alt, src, link} : ProgramsData) {
    return (
        <Link className="flex flex-row min-w-50 pt-4 transition duration-150 ease-linear hover:scale-[101%] active:scale-105"
              href={link}
        >
            <div className="py-1">
                <Image
                    src={src}
                    alt={alt}
                    width={250}
                    height={250}
                    loading={"eager"}
                />
            </div>
            <div className="relative">
                <div
                    className="absolute flex justify-center -translate-x-1/2 h-full min-w-13.75 bg-primary-green -skew-x-[0.20rad] shrink">
                    <div className="w-2 h-full bg-zinc-50 -skew-x-6"/>
                </div>
                <div className="flex items-end justify-end h-full max-w-62.5 bg-zinc-100 p-4">
                    <div className="flex flex-col items-end gap-1 w-[85%]">
                        <p className="text-end text-pretty text-sm md:text-base">
                            {entry}
                        </p>
                        <ChevronsRight size={24} color="white" className="bg-primary-green rounded-sm p-1"/>
                    </div>
                </div>
            </div>
        </Link>
    );
}