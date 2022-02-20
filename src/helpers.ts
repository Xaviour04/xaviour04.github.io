export function mapValue(
    x: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
): number {
    const dIn = inMax - inMin;
    const dOut = outMax - outMin;
    return ((x - inMin) * dOut) / dIn + outMin;
}

export function lerp(x: number, start: number, end: number): number {
    return (end - start) * x + start;
}

export function toRadians(degrees: number) {
    return degrees * (Math.PI / 180);
}

export function randInt(a: number, b?: number): number {
    return Math.floor(random(a, b));
}

export function random(a: number, b?: number): number {
    if (typeof b === "undefined") {
        [a, b] = [0, a];
    }

    return mapValue(Math.random(), 0, 1, a, b);
}

export function polarToCartesian(
    angle: number,
    radius: number,
    offset?: {
        x?: number;
        y?: number;
    }
): { x: number; y: number } {
    const x = radius * Math.cos(angle) + (offset?.x || 0);
    const y = radius * Math.sin(angle) + (offset?.y || 0);
    return { x, y };
}