import {Telegram, Viber, WhatsUp, YouTube} from "@/app/components/footer/custom-icons";
import {Mail} from "lucide-react";

export function PhoneLink() {
    return (
        <div className="flex flex-row gap-1">
            <Telegram size={24}/>
            <Viber size={24}/>
            <WhatsUp size={24}/>
            <a className='ml-2'>89127532529</a>
        </div>
    );
}

export function EMailLink() {
    return (
        <div className="flex flex-row gap-1">
            <Mail size={20}/>
            <a>baby_walk@mail.ru</a>
        </div>
    );
}

export function VkLink() {
    return (
        <div className="flex flex-row gap-1">
            Сообщество ВК:
            <a href="https://vk.com/babywalk18" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                vk.com/babywalk18
            </a>
        </div>
    );
}

export function TgChannelLink() {
    return (
        <div className="flex flex-row gap-1">
            Телеграм канал:
            <a href="https://t.me/Includo_st" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                t.me/Includo_st
            </a>
        </div>
    );
}

export function YouTubeLink() {
    return (
        <div className="flex flex-row gap-1">
            <YouTube size={24}/>
            <a href="https://www.youtube.com/@BabyWalk_18" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                youtube.com/@BabyWalk_18
            </a>
        </div>
    );
}