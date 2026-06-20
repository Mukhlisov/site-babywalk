"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { sendGetNewsByProgramRequest, type News } from "@/extra/requests";
import NewsCard from "@/extra/components/news/news-card";

const PAGE_SIZE = 10;

const masonryBreakpoints = {
    default: 3,
    1024: 2,
    640: 1,
};

type NewsFeedProps = {
    program: string;
};

export default function NewsFeed({ program }: NewsFeedProps) {
    const [items, setItems] = useState<News[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const sentinelRef = useRef<HTMLDivElement>(null);
    const isFetchingRef = useRef(false);

    useEffect(() => {
        let cancelled = false;
        isFetchingRef.current = true;
        setItems([]);
        setHasMore(true);
        setError(null);
        setIsLoading(true);
        setIsLoadingMore(false);

        void (async () => {
            try {
                const batch = await sendGetNewsByProgramRequest(program, 0, PAGE_SIZE);
                if (cancelled) return;
                setItems(batch);
                setHasMore(batch.length === PAGE_SIZE);
            } catch {
                if (!cancelled) {
                    setError("Не удалось загрузить новости. Попробуйте обновить страницу.");
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                    isFetchingRef.current = false;
                }
            }
        })();

        return () => {
            cancelled = true;
            isFetchingRef.current = false;
        };
    }, [program]);

    const loadMore = useCallback(async () => {
        if (isFetchingRef.current || !hasMore || isLoading) return;

        isFetchingRef.current = true;
        setIsLoadingMore(true);
        setError(null);

        try {
            const batch = await sendGetNewsByProgramRequest(program, items.length, PAGE_SIZE);
            setItems((prev) => [...prev, ...batch]);
            setHasMore(batch.length === PAGE_SIZE);
        } catch {
            setError("Не удалось загрузить новости. Попробуйте обновить страницу.");
        } finally {
            setIsLoadingMore(false);
            isFetchingRef.current = false;
        }
    }, [program, items.length, hasMore, isLoading]);

    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel || isLoading) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    void loadMore();
                }
            },
            { rootMargin: "200px" }
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [loadMore, isLoading]);

    return (
        <section className="px-2 my-8">
            <div className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg">
                <h3 className="text-2xl md:text-3xl mb-6">Новости</h3>

                {isLoading && (
                    <p className="text-zinc-600">Загрузка новостей...</p>
                )}

                {error && (
                    <p className="text-red-700">{error}</p>
                )}

                {!isLoading && !error && items.length === 0 && (
                    <p className="text-zinc-600">Пока нет новостей в этом разделе.</p>
                )}

                {items.length > 0 && (
                    <Masonry
                        breakpointCols={masonryBreakpoints}
                        className="flex w-auto -ml-3"
                        columnClassName="pl-3 flex flex-col gap-3"
                    >
                        {items.map((news) => (
                            <NewsCard key={news.id} news={news} />
                        ))}
                    </Masonry>
                )}

                {isLoadingMore && (
                    <p className="mt-4 text-center text-sm text-zinc-600">Загрузка...</p>
                )}

                {hasMore && !isLoading && <div ref={sentinelRef} className="h-1" aria-hidden />}
            </div>
        </section>
    );
}