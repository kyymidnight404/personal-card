# KyyMidnight — Digital Identity Pass (Single Page)

A minimalist, high-precision digital identity card for **KyyMidnight** (UI/UX Designer & Developer).

---

## 1. Overview

Proyek ini berfokus pada **1 halaman tunggal (`/`)** yang menampilkan kartu identitas digital interaktif dengan estetika *dark geometric minimalism*:

- **Bentuk & Layout Kartu**: Kartu horizontal presisi dengan sudut melengkung halus (`rounded-[32px]`), tekstur garis arsitektural (*hatched line pattern*) pada kedua sisi kartu, dan elevasi bayangan berlapis (*layered shadow*).
- **Sisi Depan (Front)**:
  - Logo geometris minimalis (segitiga/prism) presisi vektor.
  - Nama Brand: **KYYMIDNIGHT** (bold uppercase dengan letter-spacing proporsional).
  - Tagline: **UI/UX DESIGNER & DEVELOPER** (monospace uppercase).
- **Sisi Belakang (Back — Modular Bento Grid)**:
  - **Card A — About Me**: Ringkasan identitas personal secara singkat dan jelas.
  - **Card B — Expertise**: Tag keahlian utama (*UI/UX Design*, *Web Development*, *Front-end Development*, *Prototyping*, *Responsive Design*).
  - **Card C — Currently**: Highlight kartu fokus saat ini dengan aksen *muted blue-gray* halus.
  - **Card D — Interests**: Daftar minat (*Gaming*, *Music*, *Design*, *Technology*) dalam gaya *compact chips*.
  - **Card E — Connect**: Tautan komunikasi terurut (*Email*, *GitHub*, *Instagram*, *Discord*, *Website*).
- **Interaksi & Aksesibilitas**:
  - 3D Tilt halus pada perangkat desktop (dinonaktifkan otomatis pada perangkat sentuh dan `prefers-reduced-motion`).
  - Animasi 3D Flip mulus (600ms) dengan tinggi kedua sisi kartu yang konsisten, mendukung klik/tap maupun navigasi keyboard (`Enter` / `Space`).
  - Tombol flip dinamis (`Show Back` / `Show Front`).

---

## 2. Cara Menjalankan

```bash
# Development
npm run dev

# Type check
npm run typecheck

# Production Build
npm run build
```
