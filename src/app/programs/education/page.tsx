'use client'
import Image from "next/image"
import Title from "@/app/components/programs/program-title";
import {VideoSeminar} from "@/app/components/programs/education";
import {mainAddress} from "@/app/utils/main-address";

export default function Page() {
    return (
        <div>
            <Title title={"Образовательная деятельность в области реабилитации"}/>
            <div className="flex flex-row flex-wrap justify-evenly px-2 my-8">
                <div className="h-[280px] w-full max-w-[400px] relative shadow-lg rounded-lg overflow-hidden">
                    <Image
                        fill
                        src={mainAddress + "/static/education-1.jpg"}
                        alt={"education"}
                        className="absolute object-cover"
                    />
                    <div className="h-1/2 top-1/2 left-0 absolute p-4 bg-zinc-900/50 backdrop-blur-sm">
                        <p className="text-pretty text-zinc-50 md:text-lg">
                            Организация и финанисрование обучения и повышения квалификации специалистов Республики,
                            занятых в сфере реабилитации.
                        </p>
                    </div>
                </div>
                <VideoSeminar/>
            </div>
        </div>
    );
}