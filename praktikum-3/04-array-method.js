const nilaiMahasiswa = [75, 90, 55, 82, 68, 95, 48, 77];

console.log('=== forEach: Tampilkan Semua Nilai ===');
nilaiMahasiswa.forEach((nilai, indeks) => {
    console.log(` Mahasiswa-${indeks + 1}: ${nilai}`);
});

const gradeHuruf = nilaiMahasiswa.map(nilai => {
    if (nilai >= 90) return 'A';
    if (nilai >= 80) return 'B';
    if (nilai >= 70) return 'C';
    if (nilai >= 60) return 'D';
    return 'E';
});

console.log('\n=== map: Nilai ke Grade ===');
console.log('Nilai :', nilaiMahasiswa.join(', '));
console.log('Grade :', gradeHuruf.join(', '));

const nilaiLulus = nilaiMahasiswa.filter(nilai => nilai >= 60);
const nilaiGagal = nilaiMahasiswa.filter(nilai => nilai < 60);

console.log('\n=== Filter Lulus dan Tidak Lulus ===');
console.log('Semua nilai :', nilaiMahasiswa.join(', '));
console.log('Nilai lulus :', nilaiLulus);
console.log('Nilai gagal :', nilaiGagal);

const totalNilai = nilaiMahasiswa.reduce((akumulator, nilai) => {
    return akumulator + nilai;
}, 0);

const rataRata = totalNilai / nilaiMahasiswa.length;

console.log('\n=== reduce: Statistik Nilai ===');
console.log('Total nilai :', totalNilai);
console.log('Rata-rata :', rataRata.toFixed(2));

const nilaiLulusArr = nilaiMahasiswa.filter(nilai => nilai >= 60);
const rataRataNilaiLulus = nilaiLulusArr.reduce((acc, val) => acc + val, 0) 
    / nilaiLulusArr.length;

console.log('\n=== Method Chaining ===');
console.log('Rata-rata nilai lulus:', rataRataNilaiLulus.toFixed(2));

const produk = [
  { nama: "Laptop", harga: 8500000, stok: 5 },
  { nama: "Mouse", harga: 150000, stok: 0 },
  { nama: "Keyboard", harga: 450000, stok: 12 },
  { nama: "Monitor", harga: 3200000, stok: 0 },
  { nama: "Headset", harga: 350000, stok: 8 }
];

// 1. Filter produk yang stok > 0
const tersedia = produk.filter(item => item.stok > 0);
console.log("Produk tersedia:", tersedia);

// 2. Map nama produk yang tersedia
const namaProduk = tersedia.map(item => item.nama);
console.log("Nama produk tersedia:", namaProduk);

// 3. Reduce total nilai inventaris
const totalInventaris = tersedia.reduce((total, item) => {
  return total + (item.harga * item.stok);
}, 0);

console.log("Total nilai inventaris:", totalInventaris);

// 4. forEach tampilkan format produk
produk.forEach(item => {
  const status = item.stok > 0 ? "TERSEDIA" : "HABIS";
  const infoStok = item.stok > 0 ? ` (${item.stok} unit)` : "";

  console.log(`[${status}] ${item.nama} - Rp${item.harga}${infoStok}`);
});