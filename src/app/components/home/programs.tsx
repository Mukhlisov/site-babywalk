import Image from "next/image";

export default function Programs() {
    const props : ProgramCardProps[] = [
        new ProgramCardPropsImpl('Служба домашнего визитирования', 'Home Visiting', '/home-visiting.jpg'),
        // new ProgramCardPropsImpl('Движение BabyWalk Удмуртия', 'Baby Walk', '/baby-walk.jpg'),
        // new ProgramCardPropsImpl('Образование специалистов', 'Education', '/education.jpeg'),
        // new ProgramCardPropsImpl('Поддержка отечественных разработок ТСР', 'Supports for domestic developments', '/devs-support.jpg'),
    ];
    return (
        <div className="px-6 my-8">
            <p className="text-[1.5rem] text-center font-bold">
                Программы
            </p>
            <div className="flex flex-row flex-wrap gap-4 justify-center mt-5">
                {props.map((prop, index) => (
                    <ProgramCard key={index} entry={prop.entry} alt={prop.alt} src={prop.src} />
                ))}
            </div>
        </div>
    );
}

export function ProgramCard( prop: ProgramCardProps) {
    return (
        <div className="relative overflow-hidden flex flex-row min-w-[200px] bg-zinc-500">
            {/* Левая карточка */}
            <div className="relative z-10">
                <Image
                    src={prop.src}
                    alt={prop.alt}
                    width={250}
                    height={250}
                />
            </div>

            {/* Косая линия */}
            <div className="relative z-20">
                <div className="absolute inset-0 left-1/2 -translate-x-1/2 h-full w-[55px] bg-lime-600 -skew-x-[13deg]"></div>
            </div>

            {/* Правая карточка */}
            <div className="w-[250px] bg-zinc-300 z-10">
                <p className="pl-2 text-left text-wrap">
                    {prop.entry}
                </p>
            </div>
        </div>
    );
}

interface ProgramCardProps {
    entry: string;
    alt: string;
    src: string;
}

class ProgramCardPropsImpl implements ProgramCardProps {
    constructor(entry: string, alt: string, src: string) {
        this.entry = entry;
        this.alt = alt;
        this.src = src;
    }

    entry: string;
    alt: string;
    src: string;
}