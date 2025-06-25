import Title from "@/app/programs/components/program-title";

export default function Page() {
    return (
        <div>
            <Title title={"Аренда и ремонт технических средств реабилитации"}/>
            <div className="my-8">
                <ul className="flex flex-col gap-1 bg-zinc-100 rounded-lg shadow-lg max-w-max p-4 md:text-lg text-pretty">
                    <li>Долгосрочная безвозмездная аренда ТСР семьям</li>
                    <li>Ремонт ТСР</li>
                    <li>Поддержка отечественных разработчиков и производителей ТСР</li>
                </ul>
            </div>
        </div>
    );
}