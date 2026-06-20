"use client";

import { useCallback, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FixModalOpen } from "@/extra/components/modals/modal-helper";

type AttachmentsGalleryProps = {
    uris: string[];
    currentIndex: number;
    onIndexChangeAction: (index: number) => void;
    isOpen: boolean;
    onCloseAction: () => void;
};

function clampIndex(index: number, length: number): number {
    if (length === 0) return 0;
    return ((index % length) + length) % length;
}

export default function AttachmentsGallery({
    uris,
    currentIndex,
    onIndexChangeAction,
    isOpen,
    onCloseAction,
}: AttachmentsGalleryProps) {
    const safeIndex = clampIndex(currentIndex, uris.length);

    useEffect(() => {
        FixModalOpen(isOpen);
        return () => FixModalOpen(false);
    }, [isOpen]);

    const goToPrevious = useCallback(() => {
        onIndexChangeAction(clampIndex(safeIndex - 1, uris.length));
    }, [onIndexChangeAction, safeIndex, uris.length]);

    const goToNext = useCallback(() => {
        onIndexChangeAction(clampIndex(safeIndex + 1, uris.length));
    }, [onIndexChangeAction, safeIndex, uris.length]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onCloseAction();
            } else if (event.key === "ArrowLeft") {
                onIndexChangeAction(clampIndex(safeIndex - 1, uris.length));
            } else if (event.key === "ArrowRight") {
                onIndexChangeAction(clampIndex(safeIndex + 1, uris.length));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onCloseAction, onIndexChangeAction, safeIndex, uris.length]);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: goToNext,
        onSwipedRight: goToPrevious,
        trackMouse: true,
        delta: 10,
        preventScrollOnSwipe: true,
    });

    if (!isOpen || uris.length === 0) return null;

    const hasMultiple = uris.length > 1;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Галерея вложений"
            onClick={onCloseAction}
        >
            <button
                type="button"
                onClick={onCloseAction}
                className="absolute top-4 right-4 z-10 rounded-full bg-zinc-800/80 p-2 text-white transition hover:bg-zinc-700"
                aria-label="Закрыть галерею"
            >
                <X size={24} />
            </button>

            {hasMultiple && (
                <>
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            goToPrevious();
                        }}
                        className="absolute left-2 md:left-6 z-10 rounded-full bg-zinc-800/80 p-2 text-white transition hover:bg-zinc-700"
                        aria-label="Предыдущее изображение"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            goToNext();
                        }}
                        className="absolute right-2 md:right-6 z-10 rounded-full bg-zinc-800/80 p-2 text-white transition hover:bg-zinc-700"
                        aria-label="Следующее изображение"
                    >
                        <ChevronRight size={28} />
                    </button>
                </>
            )}

            <div
                className="relative flex max-h-[85dvh] max-w-[94vw] items-center justify-center"
                onClick={(event) => event.stopPropagation()}
                {...swipeHandlers}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={uris[safeIndex]}
                    alt={`Вложение ${safeIndex + 1} из ${uris.length}`}
                    className="max-h-[85dvh] max-w-[94vw] object-contain"
                    draggable={false}
                />
            </div>

            {hasMultiple && (
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-zinc-300">
                    {safeIndex + 1} / {uris.length}
                </p>
            )}
        </div>
    );
}