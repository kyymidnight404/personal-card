"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight, RotateCw, Mail } from "lucide-react";
import {
  IDENTITY_CONTENT,
  CONNECT_LINKS,
  type ConnectLinkItem,
} from "@/data/socials";
import { isTouchDevice } from "@/lib/animations";

interface IdentityCardProps {
  name?: string;
  tagline?: string;
}

function GeometricPattern({
  id,
  strokeColor = "rgba(148, 163, 184, 0.032)",
}: {
  id: string;
  strokeColor?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={id}
          width="72"
          height="72"
          patternUnits="userSpaceOnUse"
        >
          <g stroke={strokeColor} strokeWidth="1">
            {/* Block 1: Horizontal lines */}
            <line x1="0" y1="6" x2="36" y2="6" />
            <line x1="0" y1="14" x2="36" y2="14" />
            <line x1="0" y1="22" x2="36" y2="22" />
            <line x1="0" y1="30" x2="36" y2="30" />

            {/* Block 2: Vertical lines */}
            <line x1="42" y1="0" x2="42" y2="36" />
            <line x1="50" y1="0" x2="50" y2="36" />
            <line x1="58" y1="0" x2="58" y2="36" />
            <line x1="66" y1="0" x2="66" y2="36" />

            {/* Block 3: Diagonal lines */}
            <line x1="0" y1="38" x2="34" y2="72" />
            <line x1="0" y1="46" x2="26" y2="72" />
            <line x1="0" y1="54" x2="18" y2="72" />
            <line x1="0" y1="62" x2="10" y2="72" />
            <line x1="8" y1="36" x2="36" y2="64" />
            <line x1="16" y1="36" x2="36" y2="56" />
            <line x1="24" y1="36" x2="36" y2="48" />

            {/* Block 4: Counter-diagonal lines */}
            <line x1="72" y1="38" x2="38" y2="72" />
            <line x1="72" y1="46" x2="46" y2="72" />
            <line x1="72" y1="54" x2="54" y2="72" />
            <line x1="72" y1="62" x2="62" y2="72" />
            <line x1="64" y1="36" x2="36" y2="64" />
            <line x1="56" y1="36" x2="36" y2="56" />
            <line x1="48" y1="36" x2="36" y2="48" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * Connect icon mapping.
 * Supported platforms: Email, GitHub, Discord.
 */
function ConnectIcon({ id }: { id: ConnectLinkItem["id"] }) {
  switch (id) {
    case "email":
      return (
        <Mail
          aria-hidden="true"
          className="h-3 w-3 shrink-0 text-[#94A3B8] transition-colors group-hover/link:text-[#F5F5F7]"
        />
      );

    case "github":
      return (
        <svg
          aria-hidden="true"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="shrink-0 text-[#94A3B8] transition-colors group-hover/link:text-[#F5F5F7]"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );

    case "discord":
      return (
        <svg
          aria-hidden="true"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="shrink-0 text-[#94A3B8] transition-colors group-hover/link:text-[#F5F5F7]"
        >
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      );
  }
}

export function IdentityCard({
  name = IDENTITY_CONTENT.name,
  tagline = IDENTITY_CONTENT.tagline,
}: IdentityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  // Motion values for subtle desktop 3D tilt
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 28, stiffness: 260, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Subtle tilt rotation (max 3.5deg) disabled on touch or reduced motion
  const tiltX = useTransform(smoothMouseY, [0, 1], [3.5, -3.5]);
  const tiltY = useTransform(smoothMouseX, [0, 1], [-4, 4]);
  const glareX = useTransform(smoothMouseX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothMouseY, [0, 1], ["0%", "100%"]);

  const enableTilt = !isTouch && !shouldReduceMotion;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleCardKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Only flip when the card container itself has focus
    if (e.target !== e.currentTarget) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <section
      aria-label="KyyMidnight Digital Identity Card"
      className="flex w-full flex-col items-center justify-center gap-6 select-none"
    >
      {/* 3D Perspective Card Container */}
      <div className="relative w-full" style={{ perspective: 1600 }}>
        {/* Outer Tilt Wrapper */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => {
            if (enableTilt) setIsHovered(true);
          }}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: enableTilt && isHovered ? tiltX : 0,
            rotateY: enableTilt && isHovered ? tiltY : 0,
            transformStyle: "preserve-3d",
          }}
          className="w-full"
        >
          {/* Inner Flip Card Wrapper */}
          <motion.div
            role="button"
            tabIndex={0}
            aria-pressed={isFlipped}
            aria-label={
              isFlipped
                ? "Digital identity card showing back side with profile details. Press Enter or Space to show front side."
                : "Digital identity card showing front side with KyyMidnight emblem. Press Enter or Space to show back side."
            }
            onClick={toggleFlip}
            onKeyDown={handleCardKeyDown}
            animate={{
              rotateY: isFlipped ? 180 : 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="group relative grid w-full grid-cols-1 cursor-pointer rounded-[28px] sm:rounded-[32px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#94A3B8]/80 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]"
          >
            {/* FRONT FACE */}
            <div
              aria-hidden={isFlipped}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(0deg) translateZ(1px)",
              }}
              className={`card-surface-layered card-face-3d relative col-start-1 row-start-1 flex min-h-[360px] sm:min-h-[385px] w-full flex-col items-center justify-center overflow-hidden rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 text-center transition-colors duration-300 group-hover:border-[#94A3B8]/25 ${
                isFlipped ? "pointer-events-none" : "pointer-events-auto"
              }`}
            >
              <GeometricPattern
                id="hatched-pattern-front"
                strokeColor="rgba(148, 163, 184, 0.032)"
              />

              {/* Subtle Radial Center Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(148,163,184,0.06)_0%,transparent_65%)]"
              />

              {/* Specular Glare */}
              {enableTilt && (
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-full transition-opacity duration-300"
                  style={{
                    opacity: isHovered ? 0.28 : 0,
                    background: `radial-gradient(circle 340px at ${glareX} ${glareY}, rgba(226,232,240,0.14), transparent 70%)`,
                  }}
                />
              )}

              {/* Metadata Accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-6 top-5 sm:inset-x-8 sm:top-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[#94A3B8]/45"
              >
                <span>PASS // 01</span>
                <span>ID &bull; KM</span>
              </div>

              {/* Geometric Emblem */}
              <div className="relative z-10 mb-5 sm:mb-6 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                <svg
                  aria-hidden="true"
                  width="68"
                  height="60"
                  viewBox="0 0 68 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:h-[66px] sm:w-[74px] drop-shadow-[0_4px_20px_rgba(245,245,247,0.08)]"
                >
                  <polygon
                    points="34,6 62,54 6,54"
                    fill="none"
                    stroke="#F5F5F7"
                    strokeWidth="4.75"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <circle cx="34" cy="38" r="2.5" fill="#94A3B8" />
                </svg>
              </div>

              {/* Brand Name */}
              <h1 className="relative z-10 font-sans text-2xl font-bold tracking-[0.24em] text-[#F5F5F7] sm:text-3xl md:text-[32px]">
                {name}
              </h1>

              {/* Tagline */}
              <p className="relative z-10 mt-2.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.26em] text-[#94A3B8] sm:text-xs">
                {tagline}
              </p>

              {/* Flip Hint */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-5 right-6 sm:bottom-6 sm:right-8 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#94A3B8]/55 transition-colors duration-300 group-hover:text-[#F5F5F7]/80"
              >
                <span className="hidden sm:inline">Flip</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <RotateCw className="h-3 w-3" />
                </span>
              </div>
            </div>

            {/* BACK FACE */}
            <div
              aria-hidden={!isFlipped}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg) translateZ(1px)",
              }}
              className={`card-surface-layered card-face-3d relative col-start-1 row-start-1 flex min-h-[360px] sm:min-h-[385px] w-full flex-col justify-center overflow-hidden rounded-[28px] sm:rounded-[32px] p-4 sm:p-6 text-left transition-colors duration-300 group-hover:border-[#94A3B8]/25 ${
                isFlipped ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <GeometricPattern
                id="hatched-pattern-back"
                strokeColor="rgba(148, 163, 184, 0.02)"
              />

              {/* Soft Vignette */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,10,14,0.35)_0%,rgba(9,10,14,0.72)_100%)]"
              />

              {/* Specular Glare */}
              {enableTilt && (
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-full transition-opacity duration-300"
                  style={{
                    opacity: isHovered ? 0.18 : 0,
                    background: `radial-gradient(circle 340px at ${glareX} ${glareY}, rgba(226,232,240,0.1), transparent 70%)`,
                  }}
                />
              )}

              {/* Bento Grid */}
              <div className="relative z-10 grid w-full grid-cols-1 gap-2.5 sm:grid-cols-12 sm:gap-3">
                {/* CARD A — ABOUT ME */}
                <article
                  aria-labelledby="bento-about-title"
                  className="bento-card sm:col-span-12 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h2
                      id="bento-about-title"
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#94A3B8]"
                    >
                      ABOUT ME
                    </h2>
                    <span
                      aria-hidden="true"
                      className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#94A3B8]/40"
                    >
                      KYYMIDNIGHT //
                    </span>
                  </div>

                  <p className="mt-2 max-w-[54ch] font-sans text-[13px] sm:text-[13.5px] leading-[1.6] text-[#E2E8F0] select-text">
                    {IDENTITY_CONTENT.aboutMe}
                  </p>
                </article>

                {/* CARD B — EXPERTISE */}
                <article
                  aria-labelledby="bento-expertise-title"
                  className="bento-card sm:col-span-7 flex flex-col justify-between rounded-2xl px-4 py-3.5 sm:px-4.5 sm:py-4"
                >
                  <h2
                    id="bento-expertise-title"
                    className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#94A3B8]"
                  >
                    EXPERTISE
                  </h2>

                  <ul
                    aria-label="Primary expertise"
                    className="mt-2.5 flex flex-wrap gap-1.5"
                  >
                    {IDENTITY_CONTENT.expertise.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-white/[0.09] bg-white/[0.035] px-2.5 py-1 font-mono text-[10.5px] font-medium text-[#F5F5F7]/90 transition-colors duration-200 hover:border-[#94A3B8]/35 hover:bg-white/[0.07] hover:text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>

                {/* CARD C — CURRENT FOCUS */}
                <article
                  aria-labelledby="bento-currently-title"
                  className="bento-card-accent sm:col-span-5 relative flex flex-col justify-between overflow-hidden rounded-2xl px-4 py-3.5 sm:px-4.5 sm:py-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h2
                      id="bento-currently-title"
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#CBD5E1]"
                    >
                      CURRENTLY
                    </h2>
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[#94A3B8] shadow-[0_0_8px_rgba(148,163,184,0.6)]"
                    />
                  </div>

                  <p className="mt-2.5 font-sans text-[12.5px] sm:text-[13px] font-medium leading-[1.55] text-[#F5F5F7] select-text">
                    {IDENTITY_CONTENT.currentFocus}
                  </p>
                </article>

                {/* CARD D — INTERESTS */}
                <article
                  aria-labelledby="bento-interests-title"
                  className="bento-card sm:col-span-5 flex flex-col justify-between rounded-2xl px-4 py-3.5 sm:px-4.5 sm:py-3.5"
                >
                  <h2
                    id="bento-interests-title"
                    className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#94A3B8]"
                  >
                    INTERESTS
                  </h2>

                  <ul
                    aria-label="Personal interests"
                    className="mt-2.5 flex flex-wrap gap-1.5"
                  >
                    {IDENTITY_CONTENT.interests.map((interest) => (
                      <li
                        key={interest}
                        className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-0.5 font-mono text-[10.5px] font-medium text-[#CBD5E1] transition-colors duration-200 hover:border-[#94A3B8]/35 hover:bg-white/[0.06] hover:text-[#F5F5F7]"
                      >
                        {interest}
                      </li>
                    ))}
                  </ul>
                </article>

                
{/* CARD E — CONNECT */}
<article
  aria-labelledby="bento-connect-title"
  className="bento-card sm:col-span-7 flex flex-col justify-between rounded-2xl px-4 py-3.5 sm:px-4.5 sm:py-3.5"
>
  <div className="flex items-center justify-between gap-2">
    <h2
      id="bento-connect-title"
      className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#94A3B8]"
    >
      CONNECT
    </h2>

    <span
      aria-hidden="true"
      className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#94A3B8]/40"
    >
      LINKS
    </span>
  </div>

  <nav
    aria-labelledby="bento-connect-title"
    className="mt-2.5 flex flex-wrap items-center gap-1.5"
  >
    {CONNECT_LINKS.map((link) => (
      <a
        key={link.id}
        href={link.href}
        target={link.id === "email" ? undefined : "_blank"}
        rel={
          link.id === "email"
            ? undefined
            : "noopener noreferrer"
        }
        aria-label={link.ariaLabel}
        tabIndex={isFlipped ? 0 : -1}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        className="group/link inline-flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] px-2.5 py-1 font-mono text-[10.5px] font-medium text-[#E2E8F0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#94A3B8]/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#94A3B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0D12]"
      >
        <ConnectIcon id={link.id} />

        <span>{link.displayText}</span>

        <ArrowUpRight
          aria-hidden="true"
          className="h-2.5 w-2.5 shrink-0 text-[#94A3B8]/65 transition-all duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-[#F5F5F7]"
        />
      </a>
    ))}
  </nav>
</article>
