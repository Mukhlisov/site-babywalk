import NewsContent from "@/extra/components/news/news-content";
import { sendGetEmbeddedNewsRequest, type NewsDto } from "@/extra/requests";

type EmbeddedNewsProps = {
    program: string;
};

// Серверный компонент: встроенные новости попадают в HTML страницы программы целиком
export default async function EmbeddedNews({ program }: EmbeddedNewsProps) {
    let items: NewsDto[];
    try {
        items = await sendGetEmbeddedNewsRequest(program);
    } catch (error) {
        // Недоступность бэкенда не должна ломать страницу программы
        console.error(`Failed to load embedded news for program "${program}"`, error);
        return null;
    }

    return items.map((news) => (
        <section key={news.id} className="px-2 mt-10">
            <article className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg">
                <h3 className="text-2xl md:text-3xl mb-6 text-pretty">{news.title}</h3>
                <NewsContent news={news} />
            </article>
        </section>
    ));
}
