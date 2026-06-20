"use client";

import { useCallback, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { Images } from "lucide-react";
import AttachmentsGallery from "@/extra/components/news/attachments-gallery";

export const VISIBLE_ATTACHMENT_LIMIT = 5;

const MAX_COLUMNS_DEFAULT = 4;
const MAX_COLUMNS_TABLET = 3;
const MAX_COLUMNS_PHONE = 2;

function getBreakpointColumns(count: number) {
    return {
        default: Math.min(count, MAX_COLUMNS_DEFAULT),
        1024: Math.min(count, MAX_COLUMNS_TABLET),
        640: Math.min(count, MAX_COLUMNS_PHONE),
    };
}

type AttachmentTileProps = {
    uri: string;
    index: number;
    onOpen: (index: number) => void;
};

function AttachmentTile({ uri, index, onOpen }: AttachmentTileProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isClipped, setIsClipped] = useState(false);

    const checkClipped = useCallback((img: HTMLImageElement) => {
        const container = containerRef.current;
        if (!container) return;
        setIsClipped(img.offsetHeight > container.clientHeight + 1);
    }, []);

    return (
        <button
            type="button"
            onClick={() => onOpen(index)}
            title="Открыть галерею"
            className="group relative block w-full cursor-pointer overflow-hidden rounded-sm shadow-md transition hover:opacity-90"
        >
            <div
                ref={containerRef}
                className="relative overflow-hidden max-h-[430px] md:max-h-[720px]"
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
        </button>
    );
}

type MoreAttachmentsPlaceholderProps = {
    previewUri: string;
    hiddenCount: number;
    onOpen: () => void;
};

function MoreAttachmentsPlaceholder({ previewUri, hiddenCount, onOpen }: MoreAttachmentsPlaceholderProps) {
    return (
        <button
            type="button"
            onClick={onOpen}
            title="Открыть все вложения"
            className="relative block w-full cursor-pointer overflow-hidden rounded-sm shadow-md transition hover:opacity-90"
        >
            <div className="relative min-h-48 max-h-[430px] md:max-h-[720px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={previewUri}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover blur-sm scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-zinc-950/65" />
                <div className="relative flex min-h-48 flex-col items-center justify-center gap-2 p-4 text-white">
                    <Images size={32} strokeWidth={1.5} />
                    <span className="text-2xl font-bold">+{hiddenCount}</span>
                    <span className="text-sm text-zinc-200">ещё фото</span>
                </div>
            </div>
        </button>
    );
}

export default function NewsAttachments({ attachmentsUris }: { attachmentsUris: string[] }) {
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);

    if (attachmentsUris.length === 0) return null;

    const hasOverflow = attachmentsUris.length > VISIBLE_ATTACHMENT_LIMIT;
    const visibleUris = hasOverflow
        ? attachmentsUris.slice(0, VISIBLE_ATTACHMENT_LIMIT - 1)
        : attachmentsUris;
    const hiddenCount = hasOverflow
        ? attachmentsUris.length - (VISIBLE_ATTACHMENT_LIMIT - 1)
        : 0;
    const masonryItemCount = hasOverflow
        ? VISIBLE_ATTACHMENT_LIMIT
        : attachmentsUris.length;

    const openGallery = (index: number) => {
        setGalleryIndex(index);
        setGalleryOpen(true);
    };

    const openGalleryFromPlaceholder = () => {
        openGallery(VISIBLE_ATTACHMENT_LIMIT - 1);
    };

    return (
        <>
            <Masonry
                breakpointCols={getBreakpointColumns(masonryItemCount)}
                className="flex w-auto gap-3"
                columnClassName="flex flex-col gap-3"
            >
                {visibleUris.map((uri, index) => (
                    <AttachmentTile
                        key={`${uri}-${index}`}
                        uri={uri}
                        index={index}
                        onOpen={openGallery}
                    />
                ))}
                {hasOverflow && (
                    <MoreAttachmentsPlaceholder
                        previewUri={attachmentsUris[VISIBLE_ATTACHMENT_LIMIT - 1]}
                        hiddenCount={hiddenCount}
                        onOpen={openGalleryFromPlaceholder}
                    />
                )}
            </Masonry>

            <AttachmentsGallery
                uris={attachmentsUris}
                currentIndex={galleryIndex}
                onIndexChangeAction={setGalleryIndex}
                isOpen={galleryOpen}
                onCloseAction={() => setGalleryOpen(false)}
            />
        </>
    );
}