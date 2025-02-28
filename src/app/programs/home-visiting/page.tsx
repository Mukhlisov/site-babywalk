export default function Page() {
    const listItems :string[] = [
        "Физический терапевт", "Ортопед", "Дефектолог",
        "Логопед", "Специалист по питанию", "Подбор ТСР",
        "Обучение семьи", "Адаптация жилья", "Доступная среда"
    ];
    return (
        <div className="px-4 md:px-16">
            <div className="flex flex-row justify-start min-h-[80px] my-5">
                <div className="h-min-full min-w-[20px] bg-lime-600"/>
                <p className="pl-6 text-2xl md:text-4xl font-extrabold text-left place-self-center">
                    Служба домашнего визитирования
                </p>
            </div>
            <div className="pl-11">
                <p className="text-xl md:text-3xl text-left font-bold">
                    Выездные консультации специалистов:
                </p>
                <ul className="list-disc list-inside text-lg md:text-xl pl-8">
                    {listItems.map((item:string, index:number) => (
                        <li key={index} className="pt-2">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// margin top 5