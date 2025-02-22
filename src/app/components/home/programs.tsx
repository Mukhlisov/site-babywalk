export default function Programs() {
    const programEntries: string[] = [
        "Служба домашнего визитирования",
        "Движение BabyWalk Удмуртия",
        "Образование специалистов",
        "Поддержка отечественных разработок ТСР"
    ];
    return (
        <div className="p-6">
            <p className="text-[1.5rem] font-bold">
                Программы
            </p>
            <div className="overflow-x-auto mt-4">
                <div className="flex flex-row md:justify-center gap-3">
                    {programEntries.map((entry, index) => (
                        <ProgramCard key={index} entry={entry} />
                    ))}
                </div>
            </div>
        </div>
    );
}

interface ProgramCardProps {
    entry: string;
}

export function ProgramCard({ entry }: ProgramCardProps) {
    return (
        <div className="p-1 border-2 border-zinc-900 rounded-lg min-w-[180px] w-1/5">
            <p>
                {entry}
            </p>
        </div>
    );
}