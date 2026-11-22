"use client";

import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -32px 0px" },
    );
    for (const element of elements) {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("reveal-pending");
        observer.observe(element);
      }
    }
    const showAll = () =>
      elements.forEach((element) => element.classList.remove("reveal-pending"));
    media.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      showAll();
      media.removeEventListener("change", showAll);
    };
  }, []);
  return null;
}
