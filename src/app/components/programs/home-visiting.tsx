import Image from "next/image";

export function ImagesPC_Main() {
    return (
        <div className="relative basis-1/3 hidden xl:inline-block">
            <Image
                src={"/home-visiting-img-2.jpg"}
                alt={"img"}
                fill
                className="max-w-[240px] max-h-[240px] absolute rounded-lg shadow-2xl shadow-zinc-950"
            />
            <Image
                src={"/home-visiting-img-1.jpg"}
                alt={"img"}
                fill
                className="max-w-[240px] max-h-[240px] absolute translate-x-[76%] translate-y-[76%] rounded-lg shadow-2xl shadow-zinc-950"
            />
            <Image
                src={"/home-visiting-img-3.jpg"}
                alt={"img"}
                fill
                className="max-w-[240px] max-h-[240px] absolute -translate-x-[20%] translate-y-[120%] rounded-lg shadow-2xl shadow-zinc-950"
            />
        </div>
    );
}

export function ImagesPhone_Main() {
    return (
        <div className="flex flex-col gap-1 shrink-1 justify-between xl:hidden">
            <Image
                src={"/home-visiting-img-2.jpg"}
                alt={"img"}
                width={110}
                height={110}
                className="rounded-lg"
            />
            <Image
                src={"/home-visiting-img-1.jpg"}
                alt={"img"}
                width={110}
                height={110}
                className="rounded-lg"
            />
            <Image
                src={"/home-visiting-img-3.jpg"}
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
        "Консультант по развитию и воспитанию детей с овз, консультант по вопросам питания", "Психолог",
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
        "/home-visiting-img-6.jpg",
        "/home-visiting-img-7.jpg",
        "/home-visiting-img-8.jpg",
        "/home-visiting-img-9.jpg",
    ]
    return (
        <div className="flex flex-col flex-wrap gap-8">
            <div className="flex flex-row flex-wrap gap-2">
                <Image
                    src="/home-visiting-img-4.jpg"
                    alt="img"
                    width={1280}
                    height={853}
                    className="w-[350px] h-auto rounded-lg mx-auto"
                />
                <Image
                    src="/home-visiting-img-5.jpg"
                    alt="img"
                    width={1280}
                    height={853}
                    className="w-[350px] h-auto rounded-lg mx-auto"
                />
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4 grid-rows-2 p-4 w-full md:w-1/2 bg-zinc-50 rounded-lg">
                    {images.map((image: string, index: number) => (
                        <Image
                            key={index}
                            src={image}
                            alt="img"
                            width={1000}
                            height={1000}
                            className="max-w-1/2 h-auto shadow-xl rounded-lg"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}