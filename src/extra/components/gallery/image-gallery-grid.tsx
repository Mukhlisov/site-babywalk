"use client";

import { useCallback, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { Images } from "lucide-react";
import ImageGalleryModal, { type GalleryImage } from "@/extra/components/gallery/image-gallery-modal";

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

type GalleryTileProps = {
    image: GalleryImage;
    index: number;
    maxTileHeightClass: string;
    onOpen: (index: number) => void;
};

function GalleryTile({ image, index, maxTileHeightClass, onOpen }: GalleryTileProps) {
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
                className={`relative overflow-hidden ${maxTileHeightClass}`}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={image.src}
                    alt={image.alt ?? `Изображение ${index + 1}`}
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

type MoreImagesPlaceholderProps = {
    previewImage: GalleryImage;
    hiddenCount: number;
    maxTileHeightClass: string;
    onOpen: () => void;
};

function MoreImagesPlaceholder({ previewImage, hiddenCount, maxTileHeightClass, onOpen }: MoreImagesPlaceholderProps) {
    return (
        <button
            type="button"
            onClick={onOpen}
            title="Открыть все изображения"
            className="relative block w-full cursor-pointer overflow-hidden rounded-sm shadow-md transition hover:opacity-90"
        >
            <div className={`relative min-h-48 overflow-hidden ${maxTileHeightClass}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={previewImage.src}
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

export type ImageGalleryGridProps = {
    images: GalleryImage[];
    visibleLimit?: number;
    maxTileHeightClass?: string;
    ariaLabel?: string;
};

export default function ImageGalleryGrid({
    images,
    visibleLimit,
    maxTileHeightClass = "max-h-[430px] md:max-h-[720px]",
    ariaLabel,
}: ImageGalleryGridProps) {
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);

    if (images.length === 0) return null;

    const limit = visibleLimit ?? images.length;
    const hasOverflow = images.length > limit;
    const visibleImages = hasOverflow ? images.slice(0, limit - 1) : images;
    const hiddenCount = hasOverflow ? images.length - (limit - 1) : 0;
    const masonryItemCount = hasOverflow ? limit : images.length;

    const openGallery = (index: number) => {
        setGalleryIndex(index);
        setGalleryOpen(true);
    };

    const openGalleryFromPlaceholder = () => {
        openGallery(limit - 1);
    };

    return (
        <>
            <Masonry
                breakpointCols={getBreakpointColumns(masonryItemCount)}
                className="flex w-auto gap-3"
                columnClassName="flex flex-col gap-3"
            >
                {visibleImages.map((image, index) => (
                    <GalleryTile
                        key={`${image.src}-${index}`}
                        image={image}
                        index={index}
                        maxTileHeightClass={maxTileHeightClass}
                        onOpen={openGallery}
                    />
                ))}
                {hasOverflow && (
                    <MoreImagesPlaceholder
                        previewImage={images[limit - 1]}
                        hiddenCount={hiddenCount}
                        maxTileHeightClass={maxTileHeightClass}
                        onOpen={openGalleryFromPlaceholder}
                    />
                )}
            </Masonry>

            <ImageGalleryModal
                images={images}
                currentIndex={galleryIndex}
                onIndexChangeAction={setGalleryIndex}
                isOpen={galleryOpen}
                onCloseAction={() => setGalleryOpen(false)}
                ariaLabel={ariaLabel}
            />
        </>
    );
}