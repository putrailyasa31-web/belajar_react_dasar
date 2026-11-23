### Aturan Mutlak
- Nama komponen React Native wajib diawali **HURUF KAPITAL** (contoh: `KartuSiswa`, bukan `kartuSiswa`).
- Di dalam React Native, teks wajib dibungkus `<Text>...</Text>` dan kotak pembungkusnya adalah `<View>...</View>`.

---

## Soal Latihan Terjemahan ke React Native
*(Wajib Dicoba di Expo Snack)*

**Soal 1 (Terjemahan Fungsi ke Komponen)**
Ubah fungsi JS murni berikut:

```javascript
const judulAplikasi = () => {
  return 'Aplikasi Data Siswa SMK';
};
```

Menjadi komponen React Native bernama `JudulAplikasi` yang me-return:
```jsx
<Text style={{ fontSize: 22, fontWeight: 'bold' }}>Aplikasi Data Siswa SMK</Text>
```
Lalu panggil `<JudulAplikasi />` di dalam `App`.

**Soal 2 (Menambah 1 Props)**
Modifikasi komponen `KartuSiswa` di atas agar menerima 2 data: `({ nama, kelas })`, lalu tampilkan baris kedua:
```jsx
<Text>Kelas: {kelas}</Text>
```

**Soal 3 (Memasang Data)**
Panggil `<KartuSiswa nama="..." kelas="..." />` sebanyak 3 kali di dalam `App` (salah satunya nama Anda sendiri).

**Soal 4 (Ganti Warna)**
Ubah `backgroundColor: '#DBEAFE'` menjadi warna lain (misal `'#DCFCE7'` untuk hijau muda atau `'#FEF3C7'` untuk kuning muda), lalu tekan `Ctrl + S` dan cek hasilnya di Expo Go HP.
