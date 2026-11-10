import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "700"],
});

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
      className={`${jakarta.variable} ${jetbrains.variable} dark`}
    >
      <body className="min-h-screen bg-[#050505] text-[#F5F5F7] antialiased selection:bg-white/20 selection:text-white overflow-x-hidden">
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
