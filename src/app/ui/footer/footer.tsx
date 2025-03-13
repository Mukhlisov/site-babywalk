import {Mail} from 'lucide-react'
import {Telegram, Viber, WhatsUp} from "@/app/ui/footer/custom-icons";

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
                            Телеграм канал:
                            <a href="https://t.me/Includo_st" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                                t.me/Includo_st
                            </a>
                        </div>
                        <div className="flex flex-row gap-1">
                            Страница ВК:
                            <a href="https://vk.com/id20032363" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                                vk.com/id20032363
                            </a>
                        </div>
                        <div className="flex flex-row gap-1">
                            <Telegram size={25}/>
                            <Viber size={25}/>
                            <WhatsUp size={25}/>
                            <a className='ml-2'>89127532529</a>
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