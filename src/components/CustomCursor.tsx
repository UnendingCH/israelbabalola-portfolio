import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none) or (pointer: coarse)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    let animationId: number;
    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      animationId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    animationId = requestAnimationFrame(render);

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest("a, button, .project-card");
      if (!target) {
        setIsHovered(false);
        setCursorText("");
        return;
      }

      setIsHovered(true);
      if (target.classList.contains("project-card")) {
        setCursorText("VIEW");
      } else {
        setCursorText("");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const dotClasses =
    "pointer-events-none fixed top-0 left-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-blue-500 transition-opacity duration-200 " +
    (isHovered ? "opacity-0" : "opacity-100");

  let ringClasses =
    "pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full border border-blue-500/40 backdrop-blur-[2px] transition-all duration-300 ";

  if (cursorText) {
    ringClasses +=
      "-ml-9 -mt-9 h-[72px] w-[72px] bg-blue-600/20 text-[11px] font-semibold text-white tracking-widest";
  } else if (isHovered) {
    ringClasses += "-ml-6 -mt-6 h-12 w-12 bg-blue-500/10";
  } else {
    ringClasses += "-ml-4 -mt-4 h-8 w-8";
  }

  return (
    <>
      <div ref={dotRef} className={dotClasses} />
      <div ref={ringRef} className={ringClasses}>
        {cursorText}
      </div>
    </>
  );
}