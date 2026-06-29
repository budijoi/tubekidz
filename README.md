# DilDulTube — Video Aman untuk Anak

Platform video curated untuk anak-anak Indonesia. Hanya menampilkan video dari channel YouTube terpercaya yang telah diseleksi — bebas dari konten tidak sesuai, algoritma推荐, dan iklan.

## Misi

Memberikan tayangan video yang **aman**, **edukatif**, dan **menghibur** untuk anak-anak Indonesia tanpa perlu khawatir orang tua terhadap konten negatif. Semua channel dan video telah dipilih secara manual.

## Fitur

- **Kurasi manual** — Channel dipilih satu per satu, dikelompokkan ke kategori: Edukasi, Lagu Anak, Kartun, Petualangan, Gaming
- **RSS otomatis** — Video terbaru dari setiap channel diambil otomatis via RSS feed YouTube setiap 1 jam
- **Bebas iklan** — Video diputar melalui embed tanpa gangguan iklan
- **Player fallback** — Jika satu platform gagal, otomatis beralih ke platform lain
- **Pencarian** — Cari video berdasarkan judul atau channel
- **Halaman channel** — Lihat semua video dari channel tertentu
- **Countdown refresh** — Timer mundur menunjukan kapan refresh RSS berikutnya
- **PWA** — Bisa dipasang di layar beranda HP/tablet

## Channel

Saat ini mencakup channel-channel seperti Blippi, CoComelon, BabyBus, Nussa, Maizen, MD Animation, Riko The Series, dan banyak lagi — semuanya curated untuk anak-anak.

## Cara Menjalankan

Jalankan server lokal:

```bash
npx serve
# atau
python -m http.server 8080
```

Lalu buka `http://localhost:8080`.
