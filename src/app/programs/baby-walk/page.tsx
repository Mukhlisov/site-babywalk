import Title from "@/app/programs/components/program-title";
import NewsFeed from "@/extra/components/news/news-feed";

export default function Page() {
    return (
        <div>
            <Title title={"Движение BabyWalk Удмуртия"}/>
            <NewsFeed program="baby-walk"/>
        </div>
    );
}