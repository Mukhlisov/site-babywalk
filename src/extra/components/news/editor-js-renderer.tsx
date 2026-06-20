import parse from "html-react-parser";
import type { EditorJsOutput } from "@/extra/requests";

type EditorBlock = {
    id?: string;
    type: string;
    data: Record<string, unknown>;
};

function renderParagraph(data: Record<string, unknown>) {
    const text = typeof data.text === "string" ? data.text : "";
    if (!text) return null;

    return (
        <p className="text-pretty leading-relaxed">
            {parse(text)}
        </p>
    );
}

function renderHeader(data: Record<string, unknown>) {
    const text = typeof data.text === "string" ? data.text : "";
    const level = typeof data.level === "number" ? data.level : 2;
    const className = "font-bold text-pretty";

    switch (level) {
        case 1:
            return <h1 className={`text-3xl ${className}`}>{parse(text)}</h1>;
        case 2:
            return <h2 className={`text-2xl ${className}`}>{parse(text)}</h2>;
        case 3:
            return <h3 className={`text-xl ${className}`}>{parse(text)}</h3>;
        case 4:
            return <h4 className={`text-lg ${className}`}>{parse(text)}</h4>;
        default:
            return <h5 className={className}>{parse(text)}</h5>;
    }
}

function renderList(data: Record<string, unknown>) {
    const style = data.style === "ordered" ? "ordered" : "unordered";
    const items = Array.isArray(data.items) ? data.items : [];

    const ListTag = style === "ordered" ? "ol" : "ul";
    const listClass = style === "ordered" ? "list-decimal" : "list-disc";

    return (
        <ListTag className={`${listClass} pl-6 space-y-1 text-pretty`}>
            {items.map((item, index) => {
                const content = typeof item === "string"
                    ? item
                    : typeof item === "object" && item !== null && "content" in item
                        ? String((item as { content: string }).content)
                        : String(item);

                return <li key={index}>{parse(content)}</li>;
            })}
        </ListTag>
    );
}

function renderImage(data: Record<string, unknown>) {
    const file = data.file as { url?: string } | undefined;
    const url = file?.url ?? (typeof data.url === "string" ? data.url : "");
    const caption = typeof data.caption === "string" ? data.caption : "";

    if (!url) return null;

    return (
        <figure className="my-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={url}
                alt={caption || "Изображение"}
                className="max-w-full h-auto rounded-sm"
                loading="lazy"
            />
            {caption && (
                <figcaption className="mt-2 text-sm text-zinc-600 text-center">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

function renderQuote(data: Record<string, unknown>) {
    const text = typeof data.text === "string" ? data.text : "";
    const caption = typeof data.caption === "string" ? data.caption : "";

    return (
        <blockquote className="border-l-4 border-primary-green pl-4 py-2 my-4 italic text-pretty">
            <p>{parse(text)}</p>
            {caption && <cite className="block mt-2 text-sm not-italic text-zinc-600">— {caption}</cite>}
        </blockquote>
    );
}

function renderDelimiter() {
    return <hr className="my-6 border-zinc-300" />;
}

function renderCode(data: Record<string, unknown>) {
    const code = typeof data.code === "string" ? data.code : "";

    return (
        <pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100">
            <code>{code}</code>
        </pre>
    );
}

function renderTable(data: Record<string, unknown>) {
    const content = Array.isArray(data.content) ? data.content as string[][] : [];
    if (content.length === 0) return null;

    const [head, ...body] = content;

    return (
        <div className="my-4 overflow-x-auto">
            <table className="min-w-full border-collapse border border-zinc-300 text-sm">
                {head && (
                    <thead>
                        <tr>
                            {head.map((cell, index) => (
                                <th key={index} className="border border-zinc-300 bg-zinc-100 px-3 py-2 text-left">
                                    {parse(cell)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {body.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="border border-zinc-300 px-3 py-2">
                                    {parse(cell)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function renderEmbed(data: Record<string, unknown>) {
    const embed = typeof data.embed === "string" ? data.embed : "";
    const caption = typeof data.caption === "string" ? data.caption : "";

    if (!embed) return null;

    return (
        <figure className="my-4">
            <div
                className="aspect-video w-full overflow-hidden rounded-sm [&>iframe]:h-full [&>iframe]:w-full"
                dangerouslySetInnerHTML={{ __html: embed }}
            />
            {caption && (
                <figcaption className="mt-2 text-sm text-zinc-600 text-center">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

function renderBlock(block: EditorBlock, index: number) {
    switch (block.type) {
        case "paragraph":
            return <div key={block.id ?? index}>{renderParagraph(block.data)}</div>;
        case "header":
            return <div key={block.id ?? index}>{renderHeader(block.data)}</div>;
        case "list":
            return <div key={block.id ?? index}>{renderList(block.data)}</div>;
        case "image":
            return <div key={block.id ?? index}>{renderImage(block.data)}</div>;
        case "quote":
            return <div key={block.id ?? index}>{renderQuote(block.data)}</div>;
        case "delimiter":
            return <div key={block.id ?? index}>{renderDelimiter()}</div>;
        case "code":
            return <div key={block.id ?? index}>{renderCode(block.data)}</div>;
        case "table":
            return <div key={block.id ?? index}>{renderTable(block.data)}</div>;
        case "embed":
            return <div key={block.id ?? index}>{renderEmbed(block.data)}</div>;
        default:
            return null;
    }
}

export default function EditorJsRenderer({ data }: { data: EditorJsOutput }) {
    const blocks = (data.blocks ?? []) as EditorBlock[];

    if (blocks.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col gap-4 text-pretty">
            {blocks.map(renderBlock)}
        </div>
    );
}