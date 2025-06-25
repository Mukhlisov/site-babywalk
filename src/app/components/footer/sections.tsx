import {EMailLink, PhoneLink, TgChannelLink, VkLink, YouTubeLink} from "@/app/components/footer/contact-links";
import Link from "next/link";

export function Documents(){
    return(
        <div className="p-4">
            <p className="mb-2" id="docs">
                Документы:
            </p>
            <div className="flex flex-col gap-4">
                <a className="underline" href={"/docs/public-offer.pdf"} target="_blank" rel="noopener noreferrer">Публичная оферта</a>
                <a className="underline" href={"/docs/privacy-policy.pdf"} target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
                <Link className="underline" href="/documents">Учредительные документы</Link>
            </div>
        </div>
    );
}

export function ContactLinks(){
    return(
        <div className="p-4">
            <p className="mb-2" id="contacts">
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
    );
}

export function DetailsOrg(){
    return(
        <div className="p-4">
            <h3 className="mb-4">
                Реквизиты АНО &#34;ДВИЖЕНИЕ ДЕТЯМ&#34;
            </h3>
            <ul className="list-none text-pretty">
                <li>Р/с: 40703810268710000053
                    <br/>в Удмуртском отд. N8618 ПАО Сбербанк России
                </li>
                <li>К/с: 30101810400000000601</li>
                <li>БИК: 049401601</li>
                <li>ИНН: 1800033180</li>
                <li>ОГРН: 1251800004169</li>
                <li>КПП: 180001001</li>
            </ul>
        </div>
    );
}

export function DetailsAccount(){
    return(
        <div className="p-4">
            <h3 className="mb-4">
                Реквизиты:
            </h3>
            <ul className="list-none">
                <li>Р/с: 40703810268710000053
                    <br/>в Удмуртском отд. N8618
                    <br/>ПАО Сбербанк России
                </li>
                <li>К/с: 30101810400000000601</li>
                <li>БИК: 049401601</li>
                <li>ИНН: 1800033180</li>
            </ul>
        </div>
    );
}
/*7707083893*/