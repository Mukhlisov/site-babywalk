export default function Page() {
    return (
        <div className="px-4 md:px-16">
            <div className="flex flex-row justify-start min-h-[80px] my-5">
                <div className="h-min-full min-w-[20px] bg-lime-600"/>
                <p className="pl-6 text-2xl md:text-4xl font-extrabold text-left place-self-center">
                    Поддержка отечественных разработок ТСР
                </p>
            </div>
            <div className="pl-11">
                <p className="text-lg md:text-xl text-balance bold">
                    Поддержка отечественных разработчиков и производителей ТСР.
                    Политика импортозамещения с акцентом на снижение стоимости ТСР.
                </p>
            </div>
        </div>
    );
}