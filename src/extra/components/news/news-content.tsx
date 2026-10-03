import EditorJsRenderer from "@/extra/components/news/editor-js-renderer";
import NewsAttachments from "@/extra/components/news/news-attachments";
import { parseEditorJsBody, type NewsDto } from "@/extra/requests";

// Тело новости целиком: текст из EditorJS + галерея вложений.
// Используется и на странице новости, и во встроенных новостях на страницах программ.
export default function NewsContent({ news }: { news: NewsDto }) {
    return (
        <>
            <EditorJsRenderer data={parseEditorJsBody(news.body)} />

            {news.attachmentsUris.length > 0 && (
                <div className="mt-8">
                    <NewsAttachments attachmentsUris={news.attachmentsUris} />
                </div>
            )}
        </>
    );
}
