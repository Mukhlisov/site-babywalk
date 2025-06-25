import Image from "next/image";
import {useState} from "react";
import {useSwipeable} from "react-swipeable";

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

export function ImagesPhone_Main() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/home-visiting-img-1.jpg",
        "/home-visiting-img-2.jpg",
        "/home-visiting-img-3.jpg",
    ];

    const handleSwipe = (direction : string) => {
        setCurrentIndex((prevIndex) => {
            if (direction === "left") {
                return (prevIndex + 1) % images.length;
            } else {
                return (prevIndex - 1 + images.length) % images.length;
            }
        });
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("left"),
        onSwipedRight: () => handleSwipe("right"),
        trackMouse: true,
        delta: 10, // Minimum swipe distance
    });

    return (
        <div className="relative w-full h-[300px] flex justify-center items-center xl:hidden overflow-hidden" {...handlers}>
            <div className="relative w-full h-full flex justify-center items-center">
                {images.map((src, index) => {
                    const isCurrent = index === currentIndex;
                    const isPrev = index === (currentIndex - 1 + images.length) % images.length;
                    const isNext = index === (currentIndex + 1) % images.length;

                    let transform = '';
                    let zIndex = 0;
                    let opacity = 0.5;
                    let scale = 0.8;

                    if (isCurrent) {
                        transform = 'translateX(0)';
                        zIndex = 10;
                        opacity = 1;
                        scale = 1;
                    } else if (isPrev) {
                        transform = 'translateX(-60%)';
                        zIndex = 5;
                    } else if (isNext) {
                        transform = 'translateX(60%)';
                        zIndex = 5;
                    } else {
                        transform = 'translateX(0)';
                        opacity = 0;
                        zIndex = 0;
                    }

                    return (
                        <Image
                            key={src}
                            src={src}
                            alt={`carousel-img-${index}`}
                            width={240}
                            height={250}
                            className="absolute w-[60%] h-[250px] object-cover rounded-lg shadow-lg"
                            style={{
                                transform: `${transform} scale(${scale})`,
                                opacity,
                                zIndex,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                        />
                    );
                })}
            </div>
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
        <Image key={0} src={"/home-visiting-img-6.jpg"} alt="image" width={400} height={400} className="shadow-xl rounded-lg"/>,
        <Image key={1} src={"/home-visiting-img-7.jpg"} alt="image" width={400} height={400} className="shadow-xl rounded-lg"/>,
        <Image key={2} src={"/home-visiting-img-8.jpg"} alt="image" width={400} height={400} className="shadow-xl rounded-lg"/>,
        <Image key={3} src={"/home-visiting-img-9.jpg"} alt="image" width={400} height={400} className="shadow-xl rounded-lg"/>,
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
                    src={"/home-visiting-img-4.jpg"}
                    alt="img"
                    width={1280}
                    height={853}
                    className="w-[350px] h-auto rounded-lg mx-auto"
                />
                <Image
                    src={"/home-visiting-img-5.jpg"}
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