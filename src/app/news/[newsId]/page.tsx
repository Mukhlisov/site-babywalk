import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import EditorJsRenderer from "@/extra/components/news/editor-js-renderer";
import NewsAttachments from "@/extra/components/news/news-attachments";
import { formatNewsDate } from "@/extra/components/news/format-news-date";
import { parseEditorJsBody, sendGetNewsByIdRequest } from "@/extra/requests";
import { convertToJSTickFromCsharpTick } from "@/extra/ticks-converter";

type NewsPageProps = {
    params: Promise<{ newsId: string }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
    const { newsId } = await params;

    const news = await sendGetNewsByIdRequest(newsId);
    if (!news) {
        notFound();
    }

    const editorData = parseEditorJsBody(news.body);
    const programPath = `/programs/${news.program}`;

    return (
        <article className="px-4 md:px-16 my-2 md:my-8">
            <Link
                href={programPath}
                className="inline-flex items-center gap-1 text-sm text-zinc-600 transition hover:text-primary-green mb-4"
            >
                <ChevronLeft size={18} />
                Назад к программе
            </Link>

            <div className="py-4 p-4 md:p-8 bg-zinc-100 shadow-lg rounded-lg">
                <h1 className="text-2xl md:text-4xl font-extrabold text-pretty mb-6">
                    {news.title}
                </h1>

                <EditorJsRenderer data={editorData} />

                {news.attachmentsUris.length > 0 && (
                    <div className="mt-8">
                        <NewsAttachments attachmentsUris={news.attachmentsUris} />
                    </div>
                )}

                <div className="mt-8 pt-4 border-t border-zinc-300 text-xs text-zinc-500 flex flex-col gap-1">
                    <span>Создано: {formatNewsDate(convertToJSTickFromCsharpTick(news.creationTime))}</span>
                    {news.updateTime !== news.creationTime && (
                        <span>Изменено: {formatNewsDate(convertToJSTickFromCsharpTick(news.updateTime))}</span>
                    )}
                </div>
            </div>
        </article>
    );
}