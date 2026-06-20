import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { ProgramsData, programsData } from "@/app/programs/components/programs-data";

const CARD_IMAGE_SIZE = 250;

export default function Programs() {
    return (
        <div className="px-4 sm:px-6 my-8">
            <p className="text-[1.5rem] text-center font-bold">
                Программы
            </p>
            <div className="mt-5 flex flex-row flex-wrap justify-center gap-x-4 gap-y-4 sm:gap-x-6">
                {programsData.map((data, index) => (
                    <ProgramCard key={index} entry={data.entry} alt={data.alt} src={data.src} link={data.link} />
                ))}
            </div>
        </div>
    );
}

function ProgramCard({ entry, alt, src, link }: ProgramsData) {
    return (
        <Link
            href={link}
            className="group flex h-[200px] w-[334px] shrink-0 overflow-hidden pt-2 transition duration-150 ease-linear hover:scale-[101%] active:scale-105 md:h-[250px] md:w-[418px] md:pt-4"
        >
            <div className="relative h-[200px] w-[160px] shrink-0 overflow-hidden md:h-[250px] md:w-[200px]">
                <Image
                    src={src}
                    alt={alt}
                    width={CARD_IMAGE_SIZE}
                    height={CARD_IMAGE_SIZE}
                    className="size-full object-cover"
                    loading="eager"
                />
            </div>

            <div className="relative h-full w-[174px] shrink-0 bg-zinc-100 md:w-[218px]">
                <div
                    className="pointer-events-none absolute left-0 top-0 z-10 flex h-full w-11 -translate-x-1/2 justify-center bg-primary-green -skew-x-[0.20rad] md:w-14"
                    aria-hidden
                >
                    <div className="h-full w-1.5 -skew-x-6 bg-zinc-50 md:w-2" />
                </div>

                <div className="relative flex h-full flex-col items-end justify-end gap-1 p-2 pl-4 md:gap-1 md:p-3 md:pl-5">
                    <p className="w-full text-end text-pretty text-xs leading-snug sm:text-sm md:text-base">
                        {entry}
                    </p>
                    <ChevronsRight
                        color="white"
                        className="size-5 shrink-0 rounded-sm bg-primary-green p-0.5 md:size-6 md:p-1"
                    />
                </div>
            </div>
        </Link>
    );
}