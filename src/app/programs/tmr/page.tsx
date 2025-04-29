import Title from "@/app/components/programs/program-title";

export default function Page() {
    return (
        <div>
            <Title title={"Аренда и ремонт технических средств реабилитации"}/>
            <div className="pl-11">
                <p className="text-lg md:text-xl text-balance bold">
                    Поддержка отечественных разработчиков и производителей ТСР.
                    Политика импортозамещения с акцентом на снижение стоимости ТСР.
                </p>
            </div>
        </div>
    );
}