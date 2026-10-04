import ImageGalleryGrid from "@/extra/components/gallery/image-gallery-grid";

export const VISIBLE_ATTACHMENT_LIMIT = 6;

type NewsAttachmentsProps = {
    attachmentsUris: string[];
};

export default function NewsAttachments({ attachmentsUris }: NewsAttachmentsProps) {
    const images = attachmentsUris.map((src, index) => ({
        src,
        alt: `Вложение ${index + 1}`,
    }));

    return (
        <ImageGalleryGrid
            images={images}
            layout="uniform"
            visibleLimit={VISIBLE_ATTACHMENT_LIMIT}
            ariaLabel="Галерея вложений"
        />
    );
}