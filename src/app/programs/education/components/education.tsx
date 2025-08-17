export function VideoSeminar() {
    const seminarDetails = [
        "Республиканский детский реабилитационный центр Адели г.Ижевск;",
        "Февраль 2025 г;",
        "Спикер: врач-ортопед Андрей Сергеевич Калачев;",
        "Материалы компании «РехабМедикал»;",
        "При поддержке АНО \"Движение детям\".",
    ];
    return (
        <section className="w-full lg:w-1/2">
            <h3 className="text-xl text-center bg-zinc-100 rounded-lg my-8 lg:mt-0 p-4 shadow-xl">
                Семинар по социально-бытовой адаптации
            </h3>
            <div className={"w-full aspect-video relative overflow-hidden rounded-xl shadow-xl"}>
                <iframe
                    src="https://vk.com/video_ext.php?oid=-230586604&id=456239025&hd=2"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                    allowFullScreen
                    className="absolute w-full h-full"
                >
                </iframe>
            </div>
            <aside className="bg-zinc-100 rounded-lg my-8 p-4 shadow-xl">
                <ul className={"list-none text-pretty flex flex-col gap-1"}>
                    {seminarDetails.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </aside>
        </section>
    );
}