export function formatNewsDate(timestamp: number): string {
    if (!timestamp) return "—";

    const ms = timestamp < 1e12 ? timestamp * 1000 : timestamp;

    return new Date(ms).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}