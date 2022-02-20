export default class Canvas {
    element: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    width: number;
    height: number;
    resizeCallbacks: ((
        width: number,
        height: number,
        oldWidth: number,
        oldHeight: number
    ) => void)[];
    scrollCallbacks: ((dx: number, dy: number) => void)[];
    mouseX: number;
    mouseY: number;

    constructor(element: HTMLCanvasElement | string) {
        if (typeof element === "string") {
            element = document.querySelector<HTMLCanvasElement>(element)!;
        }

        this.element = element;
        this.ctx = this.element.getContext("2d")!;

        [this.width, this.height] = [this.element.width, this.element.height];

        // this.resizeCallbacks: (width: number, height: number): void [];
        let resizeCallbacks: ((
            width: number,
            height: number,
            oldWidth: number,
            oldHeight: number
        ) => void)[] = [];
        this.resizeCallbacks = resizeCallbacks;

        let scrollCallbacks: ((dx: number, dy: number) => void)[] = [];
        this.scrollCallbacks = scrollCallbacks;

        window.addEventListener("resize", () => this.resizeCanvas());
        this.resizeCanvas();

        element.addEventListener("mousemove", (event) => {
            [this.mouseX, this.mouseY] = [event.clientX, event.clientY];
        });

        element.addEventListener("mouseleave", () => {
            this.mouseX = this.mouseY = NaN;
        });
        this.mouseX = this.mouseY = NaN;

        element.addEventListener(
            "wheel",
            ({ deltaX, deltaY }) => {
                this.scrollCallbacks.forEach((callbackfn) =>
                    callbackfn(deltaX, deltaY)
                );
            },
            { passive: true }
        );
    }

    set onresize(
        callback: (
            width: number,
            height: number,
            oldWidth: number,
            oldHeight: number
        ) => void
    ) {
        this.resizeCallbacks.push(callback);
    }

    set onscroll(callback: (dx: number, dy: number) => void) {
        this.scrollCallbacks.push(callback);
    }

    clear(args?: {
        startX?: number;
        startY?: number;
        endX?: number;
        endY?: number;
    }) {
        this.ctx.clearRect(
            args?.startX || 0,
            args?.startY || 0,
            args?.endX || this.width,
            args?.endY || this.height
        );
    }

    resizeCanvas() {
        const [oldWidth, oldHeight] = [this.width, this.height];

        this.width = this.element.width = window.innerWidth;
        this.height = this.element.height = window.innerHeight;

        this.resizeCallbacks.forEach((callbackfn) =>
            callbackfn(this.width, this.height, oldWidth, oldHeight)
        );
    }
}