import Canvas from "./canvas";
import { mapValue } from "./helpers";
import Star from "./star";

import "../style/main.scss";

const canvas = new Canvas("canvas");

const stars: Array<Star> = [];

let speed = 50;
let expectedSpeed = speed;

function init() {
    canvas.ctx.translate(canvas.width / 2, canvas.height / 2);
    for (let i = 0; i < 750; i++) {
        const star = new Star(canvas);
        star.reset({ radial: false, randomDepth: true });
        stars.push(star);
    }
}

function resized(
    width: number,
    height: number,
    oldWidth: number,
    oldHeight: number
) {
    canvas.ctx.translate(width / 2, height / 2);
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.x = mapValue(star.x, 0, oldWidth, 0, width);
        star.y = mapValue(star.y, 0, oldHeight, 0, height);
    }
}

function loop() {
    if (speed > expectedSpeed) {
        speed -= 1;
    } else if (speed < expectedSpeed) {
        speed += 1;
    }

    canvas.clear({
        startX: -canvas.width / 2,
        startY: -canvas.height / 2,
    });

    stars.forEach((star) => {
        star.update(speed);
        star.draw({
            lines: false,
            stars: true,
            radius: 2,
        });
    });

    requestAnimationFrame(loop);
}

canvas.onresize = resized;

document.addEventListener("keydown", ({ key }) => {
    switch (key) {
        case "+":
            expectedSpeed += 2;
            break;
        case "-":
            expectedSpeed -= 2;
            break;
        default:
            console.log(key);
            break;
    }
});

init();
window.addEventListener("load", () => {
    expectedSpeed = 1;
    loop();
});

const navbar = document.querySelector("nav")!;
const navbarOpenBtn =
    document.querySelectorAll<HTMLAnchorElement>(".navbar-open-btn");
const navbarCloseBtn =
    document.querySelectorAll<HTMLAnchorElement>(".navbar-close-btn");

navbarOpenBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        navbar.classList.add("open");
    });
});

navbarCloseBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        navbar.classList.remove("open");
    });
});
