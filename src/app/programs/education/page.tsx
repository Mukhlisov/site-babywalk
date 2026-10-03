import Image from "next/image"
import Title from "@/app/programs/components/program-title";
import {VideoSeminar} from "@/app/programs/education/components/education";
import NewsFeed from "@/extra/components/news/news-feed";
import EmbeddedNews from "@/extra/components/news/embedded-news";

export default function Page() {
    return (
        <div>
            <Title title={"Просветительская деятельность в области реабилитации"}/>
            <div className="flex flex-row flex-wrap justify-evenly gap-y-8 px-2 my-8">
                <div className="w-full max-w-100 flex flex-col shadow-lg rounded-lg overflow-hidden bg-zinc-100">
                    <div className="h-70 relative">
                        <Image
                            fill
                            src={"/education-1.jpg"}
                            alt={"education"}
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                        <p className="text-pretty md:text-lg">
                            Мы верим, что информирование – сила. Поэтому проводим семинары, лекции и обучающие
                            программы для родителей, специалистов и всех, кто связан с детской реабилитацией.
                        </p>
                        <p className="text-pretty md:text-lg">
                            Финансируем обучение и повышение квалификации специалистов, чтобы повысить качество
                            реабилитационных услуг в регионе.
                        </p>
                    </div>
                </div>
                <VideoSeminar/>
            </div>
            <EmbeddedNews program="education"/>
            <NewsFeed program="education"/>
        </div>
    );
}