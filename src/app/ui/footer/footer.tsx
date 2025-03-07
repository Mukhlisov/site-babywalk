import {Phone, Mail} from 'lucide-react'
import {Telegram} from "@/app/ui/footer/custom-icons";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-50 p-2 flex flex-row min-h-[240px] items-center justify-center">
            <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-2 md:gap-0">
                <div className="p-4">
                    <p className="pb-2" id="contacts">
                        Контакты:
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-1">
                            <Telegram size={20}/>
                            <a href="https://t.me/Includo_st" target="_blank" rel="noopener noreferrer" className="underline">
                                https://t.me/Includo_st
                            </a>
                        </div>
                        <div className="flex flex-row gap-1">
                            <Phone size={20}/>
                            <a>89124693676</a>
                        </div>
                        <div className="flex flex-row gap-1">
                            <Mail size={20}/>
                            <a>baby_walk@mail.ru</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <div>
                        <a className="underline" href="" target="_blank" rel="noopener noreferrer">Публичная оферта</a>
                    </div>
                    <div>
                        <a className="underline" href="" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}