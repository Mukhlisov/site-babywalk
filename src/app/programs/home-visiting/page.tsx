'use client'
import {
    ImageGallery,
    ImagesPC_Main,
    ImagesPhone_Main,
    ListHomeVisiting,
    VideoGallery
} from "@/app/programs/home-visiting/components/home-visiting";
import Title from "@/app/programs/components/program-title";

export default function Page() {
    return (
        <div>
            <Title title="Служба домашнего визитирования"/>
            <div className="flex flex-row flex-wrap gap-x-4 md:gap-x-12 px-2 my-8">
                <div className="flex flex-col basis-3/5 gap-14">
                    <div className="bg-zinc-100 p-4 shadow-lg rounded-lg">
                        <p className="text-pretty">
                            Проект включает длительное сопровождение семьи: консультации и практические занятия с целью обучения
                            пациента и его окружения основным навыкам, необходимым в быту, а также подбор ТСР, адаптация среды, оказание
                            психологической помощи, при необходимости - юридической помощи.
                        </p>
                    </div>
                    <div className="hidden xl:block">
                        <ListHomeVisiting/>
                    </div>
                </div>
                <ImagesPhone_Main/>
                <ImagesPC_Main/>
            </div>
            <div className="px-2 my-8 block xl:hidden">
                <ListHomeVisiting/>
            </div>
            <div className="px-2 my-24 md:mt-48">
                <div className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg">
                    <VideoGallery/>
                </div>
            </div>
            <div className="px-2 my-16 md:my-32">
                <div className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg">
                    <ImageGallery/>
                </div>
            </div>
        </div>
    );
}