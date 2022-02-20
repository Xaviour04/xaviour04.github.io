// const depth = Math.max(canvas.width, canvas.height);

import Canvas from "./canvas";
import { mapValue, polarToCartesian, random } from "./helpers";

const depth = 10_000;

export default class Star {
    x: number;
    y: number;
    z: number;
    canvas: Canvas;
    ctx: CanvasRenderingContext2D;
    speed: number;

    private fromZ: number;

    constructor(parent: Canvas, x: number = 0, y: number = 0, z: number = 0) {
        this.canvas = parent;
        this.ctx = this.canvas.ctx;

        [this.x, this.y, this.z] = [x, y, z];
        this.fromZ = z;
        this.speed = 0;
    }

    update(speed: number) {
        this.speed = speed;
        this.z -= speed;

        if (this.z <= 1 && speed > 0) this.reset({ radial: speed > 10 });
    }

    reset(args?: { randomDepth?: boolean; base?: number; radial?: boolean }) {
        const randomDepth =
            typeof args?.randomDepth === "undefined" ? false : args.randomDepth;
        const base = args?.base || depth;
        const radial = typeof args?.radial === "undefined" ? true : args.radial;

        const width = this.canvas.width;
        const height = this.canvas.height;

        if (!radial) {
            this.x = random(-width*2, width*2);
            this.y = random(-height*2, height*2);
            this.fromZ = this.z = randomDepth ? random(depth) : base;
            return;
        }

        const radius = Math.max(width, height) / 20;
        const angle = random(2 * Math.PI);
        const { x, y } = polarToCartesian(angle, radius);

        this.x = x;
        this.y = y;
        this.fromZ = this.z = randomDepth ? random(depth) : base;
    }

    draw(args?: { lines?: boolean; stars?: boolean; radius?: number }) {
        const width = this.canvas.width;
        const height = this.canvas.height;

        const x = mapValue(this.x / this.z, -1, 1, -width / 2, width / 2);
        const y = mapValue(this.y / this.z, -1, 1, -height / 2, height / 2);

        if (
            -width / 2 > x ||
            x > width / 2 ||
            -height / 2 > y ||
            y > height / 2
        ) {
            this.reset({ radial: this.speed > 10 });
        }

        const opacity = mapValue(this.z, 0, depth, 1, -1);

        if (args?.stars) {
            const r = mapValue(this.z, 0, depth, args.radius || 4, 0);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            this.ctx.beginPath();
            this.ctx.arc(x, y, Math.abs(r), 0, 2 * Math.PI);
            this.ctx.fill();
        }

        if (args?.lines) {
            const sx = mapValue(this.x / this.fromZ, 0, 1, 0, width);
            const sy = mapValue(this.y / this.fromZ, 0, 1, 0, height);

            this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            this.ctx.beginPath();
            this.ctx.moveTo(sx, sy);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        }
    }
}
