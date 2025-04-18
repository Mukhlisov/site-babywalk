import {ImagesPC, ImagesPhone} from "@/app/components/programs/home-visiting";

export default function Page() {
    const listItems :string[] = [
        "Специалист по подбору технических средств реабилитации", "Врач ортопед-реабилитолог", "Дефектолог",
        "Консультант по развитию и воспитанию детей с овз, консультант по вопросам питания", "Психолог",
    ];
    return (
        <div className="px-2 md:px-12 my-2 md:my-8">
            <div className="flex flex-row justify-start gap-2">
                <div className="h-min-full min-w-[20px] bg-lime-600"/>
                <p className="text-xl md:text-3xl font-extrabold text-left py-4">
                    Служба домашнего визитирования
                </p>
            </div>
            <div className="flex flex-row flex-wrap gap-x-4 md:gap-x-12 px-2 my-8">
                <div className="bg-zinc-100/70 p-4 rounded-lg basis-3/5">
                    <p className="md:text-lg text-pretty">
                        Проект включает длительное сопровождение семьи: консультации и практические занятия с целью обучения
                        пациента и его окружения основным навыкам, необходимым в быту, а также подбор ТСР, адаптация среды, оказание
                        психологической помощи, при необходимости - юридической помощи.
                    </p>
                </div>
                <ImagesPhone/>
                <ImagesPC/>
            </div>
            <div className="md:flex px-2 my-8 md:basis-3/5">
                <div className="py-4 p-4 bg-zinc-100/70 rounded-lg">
                    <p className="md:text-lg text-pretty">
                        Консультации специалистов, в том числе на дому, по социально-бытовой адаптации:
                    </p>
                    <ul className="list-disc flex flex-col px-8 mt-4 gap-2 md:text-lg">
                        {listItems.map((item:string, index:number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}