"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VIDEOS = [
    { src: "/home-visiting-video-1.mp4" },
    { src: "/home-visiting-video-2.mp4" },
    { src: "/home-visiting-video-3.mp4" },
    { src: "/home-visiting-video-4.mp4" },
] as const;

export function VideoGallery() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const handlePlay = (activeIndex: number) => {
        videoRefs.current.forEach((video, index) => {
            if (video && index !== activeIndex) {
                video.pause();
            }
        });
    };

    const scrollByDirection = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (!container) return;

        const itemWidth = container.querySelector<HTMLElement>("[data-video-item]")?.offsetWidth ?? 0;
        const gap = 16;
        const offset = direction === "left" ? -(itemWidth + gap) : itemWidth + gap;

        container.scrollBy({ left: offset, behavior: "smooth" });
    };

    return (
        <div className="p-4">
            <div className="relative lg:static">
                <button
                    type="button"
                    onClick={() => scrollByDirection("left")}
                    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-zinc-800/70 p-1.5 text-white transition hover:bg-zinc-700 lg:hidden"
                    aria-label="Предыдущее видео"
                >
                    <ChevronLeft size={22} />
                </button>
                <button
                    type="button"
                    onClick={() => scrollByDirection("right")}
                    className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-zinc-800/70 p-1.5 text-white transition hover:bg-zinc-700 lg:hidden"
                    aria-label="Следующее видео"
                >
                    <ChevronRight size={22} />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 lg:flex-wrap lg:justify-center lg:overflow-visible lg:snap-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {VIDEOS.map((video, index) => (
                        <div
                            key={video.src}
                            data-video-item
                            className="w-[78vw] max-w-72 shrink-0 snap-center lg:w-auto lg:max-w-none lg:shrink"
                        >
                            <video
                                ref={(element) => {
                                    videoRefs.current[index] = element;
                                }}
                                controls
                                playsInline
                                className="mx-auto h-[50vh] max-h-112.5 w-auto rounded-lg object-contain shadow-lg lg:h-112.5"
                                preload="metadata"
                                onPlay={() => handlePlay(index)}
                            >
                                <source src={video.src} type="video/mp4" />
                                Ваш браузер не поддерживает видео.
                            </video>
                            <p className="mt-2 text-center text-xs text-zinc-500 lg:hidden">
                                {index + 1} / {VIDEOS.length}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}