import React from 'react';
import { View, Text } from 'react-native';

// INI ADALAH ARROW FUNCTION DARI TAHAP 1!
// Bedanya cuma di dalam return() isinya tag <View> dan <Text>
// Parameter ({ nama }) disebut PROPS (data kiriman dari luar)
const KartuSiswa = ({ nama }) => {
  return (
    <View style={{ padding: 15, marginTop: 10, backgroundColor: '#DBEAFE' }}>
      {/* Kurung kurawal {nama} dipakai untuk mencetak isi variabel JS ke layar */}
      <Text>Nama Siswa: {nama}</Text>
    </View>
  );
};

// Komponen utama yang pertama kali ditampilkan di layar HP
export default function App() {
  return (
    <View style={{ padding: 25, marginTop: 40 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Daftar Siswa</Text>

      {/* Memanggil fungsi KartuSiswa dengan gaya tag (seperti balok Lego) */}
      <KartuSiswa nama="Budi Santoso" />
      <KartuSiswa nama="Siti Aminah" />
    </View>
  );
}