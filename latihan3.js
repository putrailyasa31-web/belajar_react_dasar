const daftarsiswa = ["andi", "budi", "caca"];
//map akan melakukan perulangan dan mengubah setiap item
const sapasemua = daftarsiswa.map((nama) => {
    return `selamat pagi, ${nama}`;
});
console.log (sapasemua);