import { FunctionalComponent } from "preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import styles from "./style.module.scss";

import OpenMenuIcon from "../../icons/menu.svg";
import CloseMenuIcon from "../../icons/close-menu.svg";

import HomeIcon from "../../icons/home.svg";
import ProjectsIcon from "../../icons/projects.svg";
import ResumeIcon from "../../icons/resume.svg";
import ContactIcon from "../../icons/contact.svg";
import InstagramIcon from "../../icons/instagram.svg";
import GithubIcon from "../../icons/github.svg";

const Header: FunctionalComponent = () => {
    const [isMobileNav, setIsMobileNav] = useState<boolean>(true);
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const toggleMenuBtnRef = useRef<HTMLButtonElement>(null);
    const headerRef = useRef<HTMLElement>(null);
    const mobileNavRef = useRef<HTMLElement>(null);

    const mouseInteractable = useRef<(HTMLElement | null)[]>([]);

    const resizeEvent = useCallback(() => {
        setIsMobileNav(matchMedia("(max-width: 750px)").matches);
    }, []);

    const toggleNavState = useCallback(
        () => setIsNavOpen((state) => !state),
        []
    );

    useEffect(() => {
        if (!isMobileNav) setIsNavOpen(false);
    }, [isMobileNav]);

    const handler = useCallback(
        (event: MouseEvent) => {
            if (!isNavOpen || !isMobileNav) return;
            if (event.target === null) return;
            if (mobileNavRef.current?.contains(event.target as Node)) return;

            event.preventDefault();
            setIsNavOpen(false);
        },
        [isNavOpen]
    );

    useEffect(() => {
        if (!isMobileNav || !isNavOpen) return;

        document.addEventListener("click", handler, { once: true });
        return () => document.removeEventListener("click", handler);
    }, [isMobileNav]);

    const mouseMoveHandler = useCallback(
        ({ clientX: mouseX, clientY: mouseY }: MouseEvent) => {
            mouseInteractable.current.forEach((element) => {
                if (element === null) return;

                element.classList.remove(styles.mouseNotMoved);

                const { x: elemX, y: elemY } = element.getBoundingClientRect();

                element.style.setProperty("--mouse-x", `${mouseX - elemX}px`);
                element.style.setProperty("--mouse-y", `${mouseY - elemY}px`);
            });
        },
        []
    );

    document.addEventListener("scroll", () => {
        headerRef.current?.classList.toggle(
            styles.scrolled,
            window.scrollY > 16
        );
    });

    useEffect(() => {
        window.addEventListener("resize", resizeEvent);
        resizeEvent();

        mouseInteractable.current.push(toggleMenuBtnRef.current);
        mouseInteractable.current.forEach((element) => {
            if (element === null || typeof element === "undefined") return;

            element.classList.add(styles.mouseInteractable);
            element.classList.add(styles.mouseNotMoved);

            element.addEventListener(
                "custom:mouseover",
                ({ detail: { element: mouse, preventDefault } }) => {
                    preventDefault();

                    const { borderRadius } = getComputedStyle(element);
                    const { x, y, width, height } =
                        element.getBoundingClientRect();

                    mouse.animate(
                        {
                            translate: `${x}px ${y}px`,
                            width: width + "px",
                            height: height + "px",
                            borderRadius: borderRadius,
                            opacity: 0,
                        },
                        { fill: "both", duration: 750, easing: "ease-in-out" }
                    );
                }
            );
        });

        const headerHeight = getComputedStyle(headerRef.current!).height;
        document.body.style.paddingTop = headerHeight;

        toggleMenuBtnRef.current?.addEventListener("click", toggleNavState);

        document.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            window.removeEventListener("resize", resizeEvent);
            document.removeEventListener("mousemove", mouseMoveHandler);
            toggleMenuBtnRef.current?.removeEventListener(
                "click",
                toggleNavState
            );
        };
    }, []);

    return (
        <>
            <header
                class={[
                    styles.header,
                    isMobileNav ? styles.mobile : styles.desktop,
                ].join(" ")}
                ref={headerRef}
            >
                <h2 class={styles.logo}>Medwin</h2>

                <button
                    type="button"
                    aria-hidden={true}
                    style={isMobileNav ? {} : { display: "none" }}
                    class={styles.navToggleBtn}
                    ref={toggleMenuBtnRef}
                >
                    <img
                        src={OpenMenuIcon}
                        class={styles.openMenuBtn}
                        style={{ opacity: isNavOpen ? 0 : 1 }}
                        width={32}
                        height={32}
                    />
                    <img
                        src={CloseMenuIcon}
                        class={styles.closeMenuBtn}
                        style={{ opacity: isNavOpen ? 1 : 0 }}
                        width={32}
                        height={32}
                    />
                </button>

                <nav
                    class={styles.primaryNav}
                    aria-hidden={true}
                    style={isMobileNav ? { display: "none" } : {}}
                >
                    <a
                        href="/"
                        ref={(el) => mouseInteractable.current.push(el)}
                    >
                        Home
                    </a>
                    <a
                        href="/projects"
                        ref={(el) => mouseInteractable.current.push(el)}
                    >
                        Projects
                    </a>
                    <a
                        href="/resume"
                        ref={(el) => mouseInteractable.current.push(el)}
                    >
                        Resume
                    </a>
                    <a
                        href="/contact"
                        ref={(el) => mouseInteractable.current.push(el)}
                    >
                        Contact
                    </a>
                </nav>

                <div
                    class={styles.socialsNav}
                    aria-hidden={true}
                    style={isMobileNav ? { display: "none" } : {}}
                >
                    <a
                        href="https://www.instagram.com/Medwin_Manoj/"
                        ref={(el) => mouseInteractable.current.push(el)}
                    >
                        <img src={InstagramIcon} width={24} height={24} />
                    </a>
                    <a
                        href="https://github.com/Xaviour04"
                        ref={(el) => mouseInteractable.current.push(el)}
                    >
                        <img src={GithubIcon} width={24} height={24} />
                    </a>
                </div>
            </header>

            <nav
                class={[
                    styles.mobileNav,
                    isNavOpen ? styles.openNav : styles.closeNav,
                ].join(" ")}
            >
                <h3 class="titles">Navigation</h3>
                <a href="/" ref={(el) => mouseInteractable.current.push(el)}>
                    <img src={HomeIcon} width={24} height={24} />
                    <span>Home</span>
                </a>
                <a
                    href="/projects"
                    ref={(el) => mouseInteractable.current.push(el)}
                >
                    <img src={ProjectsIcon} width={24} height={24} />
                    <span>Projects</span>
                </a>
                <a
                    href="/resume"
                    ref={(el) => mouseInteractable.current.push(el)}
                >
                    <img src={ResumeIcon} width={24} height={24} />
                    <span>Resume</span>
                </a>
                <a
                    href="/contact"
                    ref={(el) => mouseInteractable.current.push(el)}
                >
                    <img src={ContactIcon} width={24} height={24} />
                    <span>Contact</span>
                </a>

                <h3 class="titles">Socials</h3>
                <a
                    href="https://www.instagram.com/Medwin_Manoj/"
                    ref={(el) => mouseInteractable.current.push(el)}
                >
                    <img src={InstagramIcon} width={24} height={24} />
                    <span>@Medwin_Manoj</span>
                </a>
                <a
                    href="https://github.com/Xaviour04"
                    ref={(el) => mouseInteractable.current.push(el)}
                >
                    <img src={GithubIcon} width={24} height={24} />
                    <span>Xaviour04</span>
                </a>
            </nav>
        </>
    );
};

export default Header;
