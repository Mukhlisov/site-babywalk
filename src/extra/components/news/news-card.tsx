import Link from "next/link";
import type { News } from "@/extra/requests";
import { formatNewsDate } from "@/extra/components/news/format-news-date";
import { convertToJSTickFromCsharpTick } from "@/extra/ticks-converter";

export default function NewsCard({ news }: { news: News }) {
    const creationDate = formatNewsDate(convertToJSTickFromCsharpTick(news.creationTime));
    const updateDate = formatNewsDate(convertToJSTickFromCsharpTick(news.updateTime));
    const isUpdated = news.updateTime !== news.creationTime;

    return (
        <Link
            href={`/news/${news.id}`}
            className="group relative block overflow-hidden rounded-lg shadow-md transition hover:shadow-xl"
        >
            {news.previewUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                    src={news.previewUrl}
                    alt={news.title}
                    className="w-full h-auto object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                />
            ) : (
                <div className="min-h-52 w-full bg-zinc-300" aria-hidden />
            )}

            <div className="absolute inset-x-0 bottom-0 flex h-1/2 flex-col justify-end bg-linear-to-t from-zinc-950/95 via-zinc-950/75 to-transparent p-3 md:p-4">
                <h4 className="text-base md:text-lg font-bold text-pretty text-white line-clamp-3 transition-colors group-hover:text-primary-green">
                    {news.title}
                </h4>
                <div className="mt-2 flex flex-col gap-0.5 text-xs text-zinc-300">
                    <span>Создано: {creationDate}</span>
                    {isUpdated && <span>Изменено: {updateDate}</span>}
                </div>
            </div>
        </Link>
    );
}