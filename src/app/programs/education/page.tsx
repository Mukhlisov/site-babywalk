'use client'
import Image from "next/image"
import Title from "@/app/components/programs/program-title";

export default function Page() {
    return (
        <div>
            <Title title={"Образовательная деятельность в области реабилитации"}/>
            <div className="flex flex-row flex-wrap justify-evenly px-2 my-8">
                <div className="h-[280px] w-full max-w-[400px] relative shadow-lg rounded-lg overflow-hidden">
                    <Image
                        fill
                        src={"/education-1.jpg"}
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
                <section className="w-full md:w-1/2">
                    <h3 className="text-xl text-center bg-zinc-100 rounded-lg my-8 md:mt-0 p-4 shadow-xl">
                        Семинар по социально-бытовой адаптации
                    </h3>
                    <div className={"w-full aspect-video relative overflow-hidden rounded-xl"}>
                        <iframe
                            src="https://rutube.ru/play/embed/04d4e30abd558e0e64c435e84370f4ba"
                            allow="accelerometer; autoplay; clipboard-write; picture-in-picture"
                            allowFullScreen
                            className={"absolute w-full h-full"}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}