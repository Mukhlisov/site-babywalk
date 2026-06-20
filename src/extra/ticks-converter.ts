const csharpEpoch = 621355968000000000;

export function convertToJSTickFromCsharpTick(ticks: number): number {
    return ((ticks - csharpEpoch) / 10000);
}