import Title from "@/app/programs/components/program-title";
import NewsFeed from "@/extra/components/news/news-feed";
import EmbeddedNews from "@/extra/components/news/embedded-news";

export default function Page() {
    return (
        <div>
            <Title title={"Движение BabyWalk Удмуртия"}/>
            <div className="px-2 my-8">
                <p className="bg-zinc-100 p-4 shadow-lg rounded-lg text-pretty md:text-lg">
                    Программа «Babywalk» — это цикл мероприятий, отражающий философию и деятельность
                    АНО «Движение детям».
                </p>
            </div>
            <EmbeddedNews program="baby-walk"/>
            <NewsFeed program="baby-walk"/>
        </div>
    );
}
