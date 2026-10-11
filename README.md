# Bun API Starter

Fondasi backend menggunakan Bun, ElysiaJS, Drizzle ORM, dan MySQL.

## Persyaratan

- Bun
- MySQL

## Menjalankan secara lokal

1. Pasang dependency:

   ```sh
   bun install
   ```

2. Buat database MySQL, lalu salin `.env.example` menjadi `.env` dan sesuaikan pengaturan koneksi.

3. Jalankan API dalam mode pengembangan:

   ```sh
   bun run dev
   ```

   Endpoint pemeriksaan kesehatan: `GET http://localhost:3000/health`.

## Database

Tambahkan definisi tabel di `src/db/schema.ts`. Buat file migrasi dari skema:

```sh
bun run db:generate
```

Terapkan migrasi ke database yang dikonfigurasi:

```sh
bun run db:migrate
```

## Pemeriksaan

```sh
bun run test
bun run typecheck
```
