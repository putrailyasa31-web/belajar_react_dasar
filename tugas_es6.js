
const produkList = [
  { nama: "Kemeja Polos", harga: 75000 },
  { nama: "Sepatu Sneakers", harga: 250000 },
  { nama: "sarung tangan", harga: 30000}
];


const hasilList = produkList.map((produk) => {
  if (produk.harga > 100000) {
    return `${produk.nama} dijual dengan harga Rp${produk.harga} - barang mewah`;
  } else {
    return `${produk.nama} dijual dengan harga Rp${produk.harga}`;
  }
});

console.log(hasilList);