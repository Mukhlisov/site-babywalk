"use client";

import { useCallback, useRef, useState } from "react";
import Masonry from "react-masonry-css";

const breakpointColumns = {
    default: 4,
    1024: 2,
    640: 1,
};

const ATTACHMENT_MAX_HEIGHT_PX = 448;

function AttachmentTile({ uri, index }: { uri: string; index: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isClipped, setIsClipped] = useState(false);

    const checkClipped = useCallback((img: HTMLImageElement) => {
        const container = containerRef.current;
        if (!container) return;
        setIsClipped(img.offsetHeight > container.clientHeight + 1);
    }, []);

    return (
        <a
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
            title="Открыть в полном размере"
            className="group relative block overflow-hidden rounded-sm shadow-md transition hover:opacity-90"
        >
            <div
                ref={containerRef}
                className="relative overflow-hidden"
                style={{ maxHeight: ATTACHMENT_MAX_HEIGHT_PX }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={uri}
                    alt={`Вложение ${index + 1}`}
                    className="block w-full h-auto"
                    loading="lazy"
                    onLoad={(event) => checkClipped(event.currentTarget)}
                />
                {isClipped && (
                    <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 flex h-16 items-end justify-center bg-linear-to-t from-zinc-950/70 via-zinc-950/30 to-transparent pb-2"
                        aria-hidden
                    >
                        <span className="text-xs text-white/90">Открыть полностью</span>
                    </div>
                )}
            </div>
        </a>
    );
}

export default function NewsAttachments({ attachmentsUris }: { attachmentsUris: string[] }) {
    if (attachmentsUris.length === 0) return null;

    return (
        <Masonry
            breakpointCols={breakpointColumns}
            className="flex w-auto gap-3"
            columnClassName="flex flex-col gap-3"
        >
            {attachmentsUris.map((uri, index) => (
                <AttachmentTile key={`${uri}-${index}`} uri={uri} index={index} />
            ))}
        </Masonry>
    );
}