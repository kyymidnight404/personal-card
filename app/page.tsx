import type { Metadata } from "next";
import { IdentityCard } from "@/components/card/IdentityCard";

export const metadata: Metadata = {
  title: "KyyMidnight — Digital Identity Pass",
  description:
    "Official Digital Identity Pass for KyyMidnight — UI/UX Designer & Developer.",
};

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen min-h-dvh w-full items-center justify-center px-3.5 py-8 sm:px-6 sm:py-12 overflow-x-hidden bg-[#050505]">
      {/* Subtle Architectural Grid with Radial Fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-midnight-grid [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)] opacity-70"
      />

      {/* Subtle Muted Blue-Gray Radial Ambient Backlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[480px] w-full max-w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.065)_0%,rgba(148,163,184,0.02)_45%,transparent_75%)] blur-3xl"
      />

      {/* Main Single-Page Content: Centered Card */}
      <div className="relative z-10 w-full max-w-[620px]">
        <IdentityCard
          name="KYYMIDNIGHT"
          tagline="UI/UX DESIGNER & WEB DEVELOPER"
        />
      </div>
    </div>
  );
}
