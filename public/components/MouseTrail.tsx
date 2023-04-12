import { FunctionalComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

const radius = 20;
const diameter = 2 * radius;

const MouseTrail: FunctionalComponent = () => {
  const span = useRef<HTMLSpanElement>(null);
  const [hasPointer, setHasPointer] = useState<boolean>(false);

  useEffect(() => {
    setHasPointer(window.matchMedia("(pointer: fine)").matches);

    const moveMouse = ({ target, clientX: x, clientY: y }: MouseEvent) => {
      const animation = span.current?.animate(
        {
          translate: `${x - radius}px ${y - radius}px`,
          width: diameter + "px",
          height: diameter + "px",
          borderRadius: "50%",
          opacity: 1,
          scale: 1,
        },
        { fill: "forwards", duration: 750, easing: "ease-in-out" }
      );

      let isHandled = false;
      const event = new CustomEvent("custom:mouseover", {
        detail: {
          element: span.current!,
          preventDefault: () => {
            animation?.cancel()
            isHandled = true;
          },
        },
        bubbles: true,
        cancelable: true,
        composed: true,
      })

      target?.dispatchEvent(event);

    };

    document.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseover", moveMouse, { once: true });
    document.addEventListener("mouseleave", () => { span.current?.animate({ opacity: 0 }, { duration: 500, fill: "both" }) })

    return () => {
      document.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <span
      aria-hidden={true}
      ref={span}
      style={{
        display: hasPointer ? "inline" : "none",

        position: "fixed",
        top: 0,
        left: 0,
        width: diameter,
        height: diameter,

        border: "1px solid rgb(255 255 255 / 50%)",
        borderRadius: "50%",
        translate: "960px 540px",
        scale: 0,
        pointerEvents: "none",

        opacity: 0,
      }}
    ></span>
  );
};

export default MouseTrail;
