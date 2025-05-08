import Image from "next/image";
import {useState} from "react";

export function ImagesPC_Main() {
    return (
        <div className="relative basis-1/3 hidden xl:inline-block">
            <Image
                src={"/static/home-visiting-img-2.jpg"}
                alt={"img"}
                width={240}
                height={240}
                className="absolute rounded-lg shadow-2xl shadow-zinc-950"
            />
            <Image
                src={"/static/home-visiting-img-1.jpg"}
                alt={"img"}
                width={240}
                height={240}
                className="absolute translate-x-[76%] translate-y-[76%] rounded-lg shadow-2xl shadow-zinc-950"
            />
            <Image
                src={"/static/home-visiting-img-3.jpg"}
                alt={"img"}
                width={240}
                height={240}
                className="absolute -translate-x-[20%] translate-y-[120%] rounded-lg shadow-2xl shadow-zinc-950"
            />
        </div>
    );
}

export function ImagesPhone_Main() {
    return (
        <div className="flex flex-col gap-1 shrink justify-between xl:hidden">
            <Image
                src={"/static/home-visiting-img-2.jpg"}
                alt={"img"}
                width={110}
                height={110}
                className="rounded-lg"
            />
            <Image
                src={"/static/home-visiting-img-1.jpg"}
                alt={"img"}
                width={110}
                height={110}
                className="rounded-lg"
            />
            <Image
                src={"/static/home-visiting-img-3.jpg"}
                alt={"img"}
                width={110}
                height={110}
                className="rounded-lg"
            />
        </div>
    );
}

export function ListHomeVisiting() {
    const listItems: string[] = [
        "Специалист по подбору технических средств реабилитации", "Врач ортопед-реабилитолог", "Дефектолог",
        "Консультант по развитию и воспитанию детей с овз, консультант по вопросам питания", "Психолог", "Юрист"
    ];
    return (
        <div className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg text-pretty">
            <p>
                Консультации специалистов, в том числе на дому, по социально-бытовой адаптации:
            </p>
            <ul className="list-disc flex flex-col px-8 mt-4 gap-2">
                {listItems.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export function VideoGallery() {
    const videos = [
        {src: "/home-visiting-video-1.mp4"},
        {src: "/home-visiting-video-2.mp4"},
        {src: "/home-visiting-video-3.mp4"},
        {src: "/home-visiting-video-4.mp4"},
    ];

    return (
        <div className="flex flex-row flex-wrap gap-8 p-4">
            {videos.map((video, index) => (
                <div key={index} className="mx-auto">
                    <video
                        controls
                        className="h-[40vh] md:h-[450px] w-auto object-contain rounded-lg shadow-lg"
                        preload="metadata"
                    >
                        <source src={video.src} type="video/mp4"/>
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>
            ))}
        </div>
    );
}

export function ImageGallery() {
    const images = [
        <Image key={0} src={"/static/home-visiting-img-6.jpg"} alt="image" width={400} height={400} className="shadow-xl rounded-lg"/>,
        <Image key={1} src={"/static/home-visiting-img-7.jpg"} alt="image" width={400} height={400} className="shadow-xl rounded-lg"/>,
        <Image key={2} src={"/static/home-visiting-img-8.jpg"} alt="image" width={400} height={400} className="shadow-xl rounded-lg"/>,
        <Image key={3} src={"/static/home-visiting-img-9.jpg"} alt="image" width={400} height={400} className="shadow-xl rounded-lg"/>,
    ];

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const handleImageClick = (index: number) => {
        if (window.innerWidth > 800) return;
        setExpandedIndex(prev => prev === index ? null : index);
    }

    return (
        <div className="flex flex-col flex-wrap gap-8">
            <div className="flex flex-row flex-wrap gap-2">
                <Image
                    src="/static/home-visiting-img-4.jpg"
                    alt="img"
                    width={1280}
                    height={853}
                    className="w-[350px] h-auto rounded-lg mx-auto"
                />
                <Image
                    src="/static/home-visiting-img-5.jpg"
                    alt="img"
                    width={1280}
                    height={853}
                    className="w-[350px] h-auto rounded-lg mx-auto"
                />
            </div>
            <div className="flex justify-center relative">
                <div className="flex md:hidden w-full h-0 p-4 absolute place-content-between">
                    {images.map((image, index : number) => (
                        <div key={index}
                             onClick={() => handleImageClick(index)}
                             className={`${expandedIndex === index ? "opacity-100 w-full h-auto" : "opacity-0 w-0 h-0"}
                             transition-all duration-[400ms] ease-out
                             `}
                        >
                            {image}
                        </div>
                    ))}
                </div>
                <div className={`grid grid-cols-2 gap-4 p-4 w-auto aspect-square bg-zinc-50 rounded-lg`}>
                    {images.map((image, index: number) => (
                        <div
                            key={index}
                            className={`w-auto md:w-[280px]`}
                            onClick={() => handleImageClick(index)}
                        >
                            {image}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}