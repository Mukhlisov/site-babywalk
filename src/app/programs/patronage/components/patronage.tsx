import Image from "next/image";
import ImageGalleryGrid from "@/extra/components/gallery/image-gallery-grid";
import { VideoGallery } from "@/app/programs/patronage/components/video-gallery";

export { VideoGallery };

export function ImagesPC_Main() {
    return (
        <div className="relative basis-1/3 min-h-[540px] hidden xl:inline-block">
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
    { src: "/home-visiting-img-1.jpg", alt: "Функциональная реабилитация" },
    { src: "/home-visiting-img-2.jpg", alt: "Функциональная реабилитация" },
    { src: "/home-visiting-img-3.jpg", alt: "Функциональная реабилитация" },
] as const;

export function ImagesPhone_Main() {
    return (
        <div className="xl:hidden">
            <ImageGalleryGrid
                images={[...PHONE_MAIN_IMAGES]}
                visibleLimit={2}
                ariaLabel="Фотогалерея «Функциональная реабилитация»"
            />
        </div>
    );
}

const SPECIALISTS = [
    { title: "Эрготерапевт", text: "навыки самообслуживания, игры, бытовые задачи и самостоятельность." },
    { title: "Физический терапевт", text: "перемещение, сидение, положение, ходьба." },
    { title: "Врач-ортопед", text: "состояние опорно-двигательной системы, позиционирование и ортопедические вопросы." },
    { title: "Дефектолог и логопед", text: "обучение, общение и участие ребенка в повседневной жизни." },
    { title: "Инструктор АФК и массажист", text: "развитие активности и поддержка двигательных навыков." },
] as const;

export function ProgramEntry() {
    return (
        <>
            <div className="bg-zinc-100 p-4 shadow-lg rounded-lg">
                <p className="text-pretty">
                    Мы объединяем специалистов разных направлений и вместе с семьёй определяем реальные цели ребенка:
                    научиться сидеть, вставать, перемещаться, есть, одеваться, играть, общаться и участвовать в жизни.
                </p>
                <p className="text-pretty mt-4">
                    Мы смотрим не только на диагноз и нарушения, а на функциональные возможности ребенка и его участие
                    в повседневной жизни.
                </p>
            </div>
            <div className="bg-zinc-100 p-4 shadow-lg rounded-lg">
                <ul className="flex flex-col gap-3">
                    {SPECIALISTS.map((item) => (
                        <li key={item.title} className="text-pretty">
                            <span className="font-bold">{item.title}</span> — {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            <ImagesPhone_Main/>
        </>
    );
}

const PRINCIPLES = [
    { title: "От диагноза — к человеку", text: ["Нас интересует не только диагноз ребёнка, но и то, как он живёт."] },
    { title: "От упражнения — к цели", text: ["Мы не делаем движение ради движения.", "У каждого действия есть смысл."] },
    {
        title: "От кабинета — к жизни",
        text: [
            "Навык нужен не для того, чтобы красиво выполнить упражнение на занятии.",
            "Он нужен дома, в школе, на улице, среди людей.",
        ],
    },
    {
        title: "От назначения — к сотрудничеству",
        text: ["Родитель — не исполнитель указаний специалиста.", "Семья участвует в выборе целей и решений."],
    },
    {
        title: "От одного специалиста — к команде",
        text: ["Сложные задачи редко решаются одной профессией.", "Специалисты объединяются вокруг цели ребёнка."],
    },
    {
        title: "От сегодняшнего дня — к будущему",
        text: [
            "Мы думаем не только о том, что ребёнок делает сегодня.",
            "Мы спрашиваем, какие возможности ему понадобятся завтра.",
        ],
    },
] as const;

export function Principles() {
    return (
        <section>
            <h3 className="text-2xl md:text-3xl mb-6">Функциональная реабилитация это:</h3>
            <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {PRINCIPLES.map((item, index) => (
                    <li key={item.title} className="bg-zinc-50 rounded-lg shadow-md p-4">
                        <p className="font-bold text-lg mb-2">
                            <span className="text-primary-green mr-2">{index + 1}.</span>
                            {item.title}
                        </p>
                        {item.text.map((line) => (
                            <p key={line} className="text-pretty">{line}</p>
                        ))}
                    </li>
                ))}
            </ol>
        </section>
    );
}

const PATRONAGE_GALLERY_IMAGES = [
    { src: "/home-visiting-img-4.jpg", alt: "Функциональная реабилитация — фото 1" },
    { src: "/home-visiting-img-5.jpg", alt: "Функциональная реабилитация — фото 2" },
    { src: "/home-visiting-img-6.jpg", alt: "Функциональная реабилитация — фото 3" },
    { src: "/home-visiting-img-7.jpg", alt: "Функциональная реабилитация — фото 4" },
    { src: "/home-visiting-img-8.jpg", alt: "Функциональная реабилитация — фото 5" },
    { src: "/home-visiting-img-9.jpg", alt: "Функциональная реабилитация — фото 6" },
] as const;

export function ImageGallery() {
    return (
        <ImageGalleryGrid
            images={[...PATRONAGE_GALLERY_IMAGES]}
            ariaLabel="Фотогалерея «Функциональная реабилитация»"
        />
    );
}