'use client'
import {
    ImageGallery,
    ImagesPC_Main,
    ImagesPhone_Main,
    ListHomeVisiting, ProgramEntry,
    VideoGallery
} from "@/app/components/programs/home-visiting";
import Title from "@/app/components/programs/program-title";

export default function Page() {
    return (
        <div>
            <Title title="Служба домашнего визитирования"/>
            <div className="flex flex-row flex-wrap gap-x-4 md:gap-x-12 px-2 my-8">
                <div className={"flex flex-col gap-4 lg:basis-3/5"}>
                    <ListHomeVisiting/>
                    <ProgramEntry/>
                </div>
                <ImagesPC_Main/>
            </div>
            <div className="px-2 my-24">
                <div className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg">
                    <VideoGallery/>
                </div>
            </div>
            <div className="px-2 my-24">
                <div className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg">
                    <ImageGallery/>
                </div>
            </div>
        </div>
    );
}