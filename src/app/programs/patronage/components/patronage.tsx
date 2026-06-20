import Image from "next/image";
import ImageGalleryGrid from "@/extra/components/gallery/image-gallery-grid";

export function ImagesPC_Main() {
    return (
        <div className="relative basis-1/3 hidden xl:inline-block">
            <Image
                src={"/home-visiting-img-2.jpg"}
                alt={"img"}
                width={240}
                height={240}
                className="absolute rounded-lg shadow-2xl shadow-zinc-950"
            />
            <Image
                src={"/home-visiting-img-1.jpg"}
                alt={"img"}
                width={240}
                height={240}
                className="absolute translate-x-[76%] translate-y-[76%] rounded-lg shadow-2xl shadow-zinc-950"
            />
            <Image
                src={"/home-visiting-img-3.jpg"}
                alt={"img"}
                width={240}
                height={240}
                className="absolute -translate-x-[20%] translate-y-[120%] rounded-lg shadow-2xl shadow-zinc-950"
            />
        </div>
    );
}

const PHONE_MAIN_IMAGES = [
    { src: "/home-visiting-img-1.jpg", alt: "Проект «Патронаж»" },
    { src: "/home-visiting-img-2.jpg", alt: "Проект «Патронаж»" },
    { src: "/home-visiting-img-3.jpg", alt: "Проект «Патронаж»" },
] as const;

export function ImagesPhone_Main() {
    return (
        <div className="xl:hidden">
            <ImageGalleryGrid
                images={[...PHONE_MAIN_IMAGES]}
                visibleLimit={2}
                ariaLabel="Фотогалерея проекта «Патронаж»"
            />
        </div>
    );
}

export function ListHomeVisiting() {
    const listItems: string[] = [
        'врача нейроортопеда-реабилитолога;', 'инструктора по адаптивной физической культуре;',
        'специалиста по подбору технических средств реабилитации;', 'олигофренопедагога;',
        'консультанта по вопросам питания детей с овз;', 'психолога (для родителей);', 'юриста (по вопросам социального обеспечения инвалидов).',
    ];
    return (
        <div className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg text-pretty">
            <p className={"text-pretty"}>
                Проектом предусмотрен длительный (не менее 1 года) патронаж семьи междисциплинарной реабилитационной командой,
                которая включает домашние консультации:
            </p>
            <ul className="list-disc flex flex-col px-8 mt-4 gap-2">
                {listItems.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export function ProgramEntry() {
    return (
        <>
            <div className="bg-zinc-100 p-4 shadow-lg rounded-lg">
                <p className="text-pretty">
                    Целью проекта является максимально независимая и достойная жизнь ребенка-инвалида, с
                    ранних лет подготовка его к самостоятельной жизни (когда родителей уже не будет рядом),
                    облегчение ухода за ним, а также улучшение психоэмоционального фона в семье.
                </p>
            </div>
            <div className="bg-zinc-100 p-4 shadow-lg rounded-lg">
                <p className="text-pretty">
                    Наш проект стремится изменить культуру курсовых реабилитаций детей в сторону домашних регулярных
                    занятий путем обучения семьи элементам ЛФК и физической терапии дома, навыкам пользования техническими
                    средствами реабилитации, навыкам питания и воспитания детей с ОВЗ и др. Домашние программы реабилитации
                    приобретают все большую популярность в связи с доказанной высокой эффективностью и возможностью страивать
                    реабилитационный процесс в повседневную жизнь ребенка.
                </p>
            </div>
            <ImagesPhone_Main/>
            <div className={"bg-zinc-100 p-4 mt-4 shadow-lg rounded-lg"}>
                <p className={"text-pretty"}>
                    Курсовые реабилитации зачастую носят излишне интенсивный характер, когда за короткий промежуток
                    времени разные специалисты пытаются «запихнуть» в ребенка все, что могут. Это стресс для ребенка,
                    стресс для мамы, семья зачастую живет разрозненно (мама на постоянных реабилитациях с ребенком,
                    муж отдельно дома, вторые дети не видят маму). Поэтому косвенно наш проект направлен и на укрепление института семьи.
                </p>
            </div>
        </>
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
                        className="h-[40vh] md:h-112.5 w-auto object-contain rounded-lg shadow-lg"
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

const PATRONAGE_GALLERY_IMAGES = [
    { src: "/home-visiting-img-4.jpg", alt: "Проект «Патронаж» — фото 1" },
    { src: "/home-visiting-img-5.jpg", alt: "Проект «Патронаж» — фото 2" },
    { src: "/home-visiting-img-6.jpg", alt: "Проект «Патронаж» — фото 3" },
    { src: "/home-visiting-img-7.jpg", alt: "Проект «Патронаж» — фото 4" },
    { src: "/home-visiting-img-8.jpg", alt: "Проект «Патронаж» — фото 5" },
    { src: "/home-visiting-img-9.jpg", alt: "Проект «Патронаж» — фото 6" },
] as const;

export function ImageGallery() {
    return (
        <ImageGalleryGrid
            images={[...PATRONAGE_GALLERY_IMAGES]}
            ariaLabel="Фотогалерея проекта «Патронаж»"
        />
    );
}