import {VkLink, PhoneLink, EMailLink, TgChannelLink, YouTubeLink} from "@/app/components/footer/contact-links";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-50 p-2 flex flex-row min-h-[240px] items-center justify-center">
            <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-2 md:gap-0">
                <div className="p-4">
                    <p className="pb-2" id="contacts">
                        Контакты:
                    </p>
                    <div className="flex flex-col gap-4">
                        <TgChannelLink/>
                        <VkLink/>
                        <YouTubeLink/>
                        <PhoneLink/>
                        <EMailLink/>
                    </div>
                </div>
                <div className="p-4">
                    <p className="pb-2" id="docs">
                        Документы:
                    </p>
                    <div className="flex flex-col gap-4">
                        <a className="underline" href="" target="_blank" rel="noopener noreferrer">Публичная оферта</a>
                        <a className="underline" href="" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
                        <Link className="underline" href="/documents">Учредительные документы</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}