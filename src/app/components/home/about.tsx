"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function About() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="about" className="p-1 px-6 md:my-8">
            <h1 className="text-2xl md:text-3xl text-center font-bold p-2">
                АНО Движение детям
            </h1>

            <div className="text-md text-justify indent-6 mt-4 rounded-md p-4 md:p-8 relative">
                <motion.div
                    initial={false}
                    animate={isOpen ? { height: "auto", opacity: 1 } : { height: 100, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`overflow-hidden relative ${!isOpen ? 
                        "after:absolute after:bottom-0 after:left-0 after:w-full after:h-16 after:bg-gradient-to-b " +
                        "after:from-transparent after:to-zinc-50" : ""}`}
                >
                    <p>
                        Автономная некоммерческая организация «Движения детям» создана с целью обучения социально-бытовой
                        адаптации детей с ОВЗ, их семей, иных ухаживающих лиц и специалистов.
                    </p><br/>
                    <p>
                        <u>Социально-бытовая адаптация</u> - это вид реабилитации, нацеленный на восстановление
                        или приобретение утраченных в результате заболеваний навыков самообслуживания в быту
                        (перемещение по дому, санитарно-гигиенические процедуры, питание, прогулка и др), ведь
                        именно эти навыки становятся самыми необходимыми во взрослой жизни. Главная цель
                        детской реабилитации- научить ребенка самостоятельной жизни без родителей.
                    </p><br/>
                    <p>
                        <u>Глобальная цель</u> - обеспечить максимально достойную и самостоятельную жизнь пациента,
                        сделать проще уход за ним.
                    </p><br/>
                    <p>
                        <u>Главный принцип</u> - нет необучаемых пациентов. Любого можно научить хотя бы минимальным
                        базовым бытовым навыкам. В особо тяжелых случаях на помощь приходят технические средства реабилитации.
                    </p>
                </motion.div>

                <button
                    className="flex items-center gap-2 mx-auto p-1 rounded-lg transition"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "Скрыть" : "Подробнее"}
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
            </div>
        </div>
    );
}