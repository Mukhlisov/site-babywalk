import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import NewsContent from "@/extra/components/news/news-content";
import { sendGetNewsByIdRequest } from "@/extra/requests";

type NewsPageProps = {
    params: Promise<{ newsId: string }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
    const { newsId } = await params;

    const news = await sendGetNewsByIdRequest(newsId);
    if (!news) {
        notFound();
    }

    const programPath = `/programs/${news.program}`;

    return (
        <article className="px-4 md:px-16 my-2 md:my-8">
            <Link
                href={programPath}
                className="inline-flex items-center gap-1 text-sm text-zinc-600 transition hover:text-primary-green mb-4"
            >
                <ChevronLeft size={18} />
                На страницу программы
            </Link>

            <div className="py-4 p-4 md:p-8 bg-zinc-100 shadow-lg rounded-lg">
                <h1 className="text-2xl md:text-4xl font-extrabold text-pretty mb-6">
                    {news.title}
                </h1>

                <NewsContent news={news} />
            </div>
        </article>
    );
}