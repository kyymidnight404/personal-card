import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "KyyMidnight — Digital Identity Pass",
  description:
    "KyyMidnight — UI/UX Designer & Developer. Digital Identity Card.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className="min-h-screen bg-[#050505] text-[#F5F5F7] antialiased selection:bg-white/20 selection:text-white overflow-x-hidden font-sans">
        {/* Fine Monochromatic Film Grain Texture */}
        <svg
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.028] mix-blend-overlay"
        >
          <filter id="midnight-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.82"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#midnight-grain)" />
        </svg>

        <main id="main-content" className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
