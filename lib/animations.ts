export const EASING = {
  expoOut: [0.16, 1, 0.3, 1] as const,
  quartOut: [0.25, 1, 0.5, 1] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
};

export const GSAP_DEFAULTS = {
  ease: "power3.out",
  duration: 0.9,
};

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
}
