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
        <div className="overflow-hidden flex flex-row min-w-[200px] bg-white">
            <div className="overflow-hidden">
                <Image
                    src={prop.src}
                    alt={prop.alt}
                    width={250}
                    height={250}
                />
            </div>
            <div className="-skew-x-12 w-[250px] self-stretch border-l-[10px] border-double border-lime-500 bg-white -translate-x-[40px]">
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