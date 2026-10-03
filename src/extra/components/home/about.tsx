const SKILLS = ["Сидеть", "Вставать", "Ходить", "Есть", "Одеваться", "Играть", "Общаться", "Участвовать в жизни"];

export default function About() {
    return (
        <div id="about" className="p-1 px-6 md:my-8">
            <h1 className="text-2xl md:text-3xl text-center font-bold p-2">
                ДВИЖЕНИЕ ДЕТЯМ
            </h1>
            <p className="text-xl md:text-2xl text-center font-semibold mt-2">
                Помогаем детям стать самостоятельнее.
            </p>
            <p className="text-center md:text-lg mt-2">
                Функциональная реабилитация детей с двигательными нарушениями.
            </p>
            <ul className="flex flex-row flex-wrap justify-center gap-2 mt-6">
                {SKILLS.map((skill) => (
                    <li key={skill} className="bg-primary-green text-zinc-50 rounded-md px-3 py-1">
                        {skill}
                    </li>
                ))}
            </ul>
            <p className="text-pretty text-center max-w-3xl mx-auto mt-6 bg-zinc-100 rounded-lg shadow-lg p-4 md:p-6">
                Мы смотрим не только на диагноз и физические нарушения. Мы видим то, что ребенок хочет и может
                делать в обычной жизни — и что помогает ему делать больше самостоятельно.
            </p>
        </div>
    );
}
