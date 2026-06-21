const API_BASE = (() => {
    const rawUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";
    if (rawUrl.startsWith("/")) {
        return rawUrl.replace(/\/$/, "");
    }
    const withProtocol = /^https?:\/\//.test(rawUrl) ? rawUrl : `http://${rawUrl}`;
    return withProtocol.replace(/\/$/, "");
})();

export type News = {
    id: string;
    program: string;
    title: string;
    previewUrl: string;
    bodyId: string;
    creationTime: number;
    updateTime: number;
    authorId: string;
};

export type NewsDto = {
    id: string;
    program: string;
    title: string;
    previewUrl: string;
    creationTime: number;
    updateTime: number;
    authorId: string;
    body: string;
    attachmentsUris: string[];
};

export type EditorJsOutput = {
    blocks: unknown[];
    time?: number;
    version?: string;
};

type PaginationParams = {
    skip?: number;
    take?: number;
};

function buildPaginationQuery({ skip = 0, take = 10 }: PaginationParams = {}): string {
    const params = new URLSearchParams({
        skip: String(skip),
        take: String(take),
    });
    return `?${params.toString()}`;
}

function getJsonHeaders(): HeadersInit {
    return {
        "Content-Type": "application/json",
    };
}

async function handleResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
        if (response.status === 204) return undefined as T;
        return await response.json() as Promise<T>;
    }

    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
}

export async function sendGetNewsRequest(skip = 0, take = 5): Promise<News[]> {
    const response = await fetch(`${API_BASE}/news${buildPaginationQuery({ skip, take })}`, {
        method: "GET",
        headers: getJsonHeaders(),
        cache: "no-store",
    });

    return handleResponse<News[]>(response);
}

export async function sendGetNewsByProgramRequest(
    program: string,
    skip = 0,
    take = 5
): Promise<News[]> {
    const response = await fetch(
        `${API_BASE}/news/${encodeURIComponent(program)}${buildPaginationQuery({ skip, take })}`,
        {
            method: "GET",
            headers: getJsonHeaders(),
            cache: "no-store",
        }
    );

    return handleResponse<News[]>(response);
}

export function parseEditorJsBody(body: string): EditorJsOutput {
    if (!body) return { blocks: [] };
    return JSON.parse(body) as EditorJsOutput;
}

export async function sendGetNewsByIdRequest(id: string): Promise<NewsDto | null> {
    const response = await fetch(`${API_BASE}/news/${encodeURIComponent(id)}`, {
        method: "GET",
        headers: getJsonHeaders(),
        cache: "no-store",
    });

    if (response.status === 404) return null;

    return handleResponse<NewsDto>(response);
}