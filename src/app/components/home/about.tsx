"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function About() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div id="about" className="p-1 px-6 md:my-16">
            <h1 className="text-2xl md:text-3xl text-center font-bold p-2">
                АНО Движение детям
            </h1>

            <button
                className="flex items-center gap-2 mx-auto mt-4 p-2 rounded-lg bg-zinc-50 md:hover:bg-zinc-200 active:bg-zinc-200 transition"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "Скрыть" : "Подробнее"}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden mt-2"
            >
                <div className="text-md text-pretty indent-6 mt-4 rounded-md bg-zinc-50 p-4 md:p-8">
                    <p>
                        Автономная некоммерческая организация «Движения детям» создана с целью обучения семей и
                        специалистов социально-бытовой адаптации пациентов с двигательными нарушениями.
                    </p><br/>
                    <p>
                        <u>Социально-бытовая адаптация</u> - это вид реабилитации, нацеленный на восстановление или приобретение
                        утраченных в результате заболеваний навыков самообслуживания в быту (перемещение по дому,
                        санитарно-гигиенические процедуры, питание, прогулка и др).
                        Также социально-бытовая адаптация включает в себя обустройство жилья пациента в соответствии с
                        имеющимися ограничениями жизнедеятельности, подбор технических средств реабилитации и обучение
                        ухаживающих ими пользоваться.
                    </p><br/>
                    <p>
                        <u>Глобальная цель</u> - обеспечить максимально достойную и самостоятельную жизнь пациента, сделать
                        проще уход за ним.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}