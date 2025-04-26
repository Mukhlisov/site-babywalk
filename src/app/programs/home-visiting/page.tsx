import {
    ImageGallery,
    ImagesPC_Main,
    ImagesPhone_Main,
    ListHomeVisiting,
    VideoGallery
} from "@/app/components/programs/home-visiting";

export default function Page() {
    return (
        <div className="px-2 md:px-12 my-2 md:my-8">
            <div className="flex flex-row justify-start gap-2">
                <div className="h-min-full min-w-[20px] bg-lime-600"/>
                <p className="text-xl md:text-3xl font-extrabold text-left py-4">
                    Служба домашнего визитирования
                </p>
            </div>
            <div className="flex flex-row flex-wrap gap-x-4 md:gap-x-12 px-2 my-8">
                <div className="flex flex-col basis-3/5 gap-[5vh]">
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
            <div className="px-2 mt-48">
                <div className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg">
                    <VideoGallery/>
                </div>
            </div>
            <div className="px-2 my-32">
                <div className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg">
                    <ImageGallery/>
                </div>
            </div>
        </div>
    );
}