"use client";

import { useState } from "react";
import Link from "next/link";
import { ImageOff } from "lucide-react";
import type { News } from "@/extra/requests";
import { formatNewsDate } from "@/extra/components/news/format-news-date";
import { convertToJSTickFromCsharpTick } from "@/extra/ticks-converter";

export default function NewsCard({ news }: { news: News }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const creationDate = formatNewsDate(convertToJSTickFromCsharpTick(news.creationTime));
    const hasPreview = Boolean(news.previewUrl);
    const showImage = hasPreview && !hasError;
    const showLoading = showImage && !isLoaded;
    const showFallback = !hasPreview || hasError;

    return (
        <Link
            href={`/news/${news.id}`}
            className="group relative block min-h-52 overflow-hidden rounded-lg shadow-md transition hover:shadow-xl max-h-[430px] md:max-h-[720px]"
        >
            {showFallback && (
                <div
                    className="flex min-h-52 w-full items-center justify-center bg-zinc-300"
                    aria-hidden
                >
                    <ImageOff className="text-zinc-500" size={40} strokeWidth={1.5} />
                </div>
            )}

            {showLoading && (
                <div
                    className="absolute inset-0 min-h-52 animate-pulse bg-zinc-200"
                    aria-hidden
                />
            )}

            {showImage && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                    src={news.previewUrl}
                    alt={news.title}
                    className={`block w-full min-h-52 h-auto object-cover transition duration-300 group-hover:scale-[1.03] group-active:scale-[1.03] ${
                        isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                />
            )}

            <div className="absolute inset-x-0 bottom-0 flex h-1/2 min-h-26 flex-col justify-end bg-linear-to-t from-zinc-950/95 via-zinc-950/75 to-transparent p-3 md:p-4">
                <div className="translate-none md:translate-y-8 md:group-hover:translate-none md:transition md:duration-300">
                    <h4 className="text-base md:text-lg font-bold text-pretty text-white line-clamp-3 transition-colors group-hover:text-primary-green group-active:text-primary-green">
                        {news.title}
                    </h4>
                    <div className="md:opacity-0 md:group-hover:opacity-100 md:transition md:duration-300 mt-2 flex flex-col gap-0.5 text-xs text-zinc-300">
                        <span>{creationDate}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}