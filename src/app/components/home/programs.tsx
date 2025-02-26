export default function Programs() {
    const programEntries: string[] = [
        "Служба домашнего визитирования",
        "Движение BabyWalk Удмуртия",
        "Образование специалистов",
        "Поддержка отечественных разработок ТСР"
    ];
    return (
        <div className="px-6 my-8">
            <p className="text-[1.5rem] text-center font-bold">
                Программы
            </p>
            <div className="flex flex-row flex-wrap gap-4 justify-center mt-5">
                {programEntries.map((entry, index) => (
                    <ProgramCard key={index} entry={entry} />
                ))}
            </div>
        </div>
    );
}

interface ProgramCardProps {
    entry: string;
}

export function ProgramCard({ entry }: ProgramCardProps) {
    return (
        <div className="p-1 border-2 border-zinc-900 rounded-lg min-w-[200px] w-1/5">

            <p className="text-center">
                {entry}
            </p>
        </div>
    );
}