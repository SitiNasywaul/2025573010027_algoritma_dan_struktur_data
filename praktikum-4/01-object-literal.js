const mahasiswa = {
    nama : 'Budi Santoso',
    umur : 20,
    jurusan : 'Teknik Informatika',
    ipk : 3.75,
    aktif : true,
};

console.log('=== Akses Property ===');
console.log('Nama :', mahasiswa.nama);
console.log('Jurusan :', mahasiswa['jurusan']);

const keyYangDicari = 'ipk';
console.log('IPK :', mahasiswa[keyYangDicari]);

mahasiswa.email = 'budi@gmail.com';
mahasiswa.umur = 21;

console.log('\nSetelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);

const dosen = {
    nama : 'Dr. Ahmad Fauzi',
    mataKuliah : 'Struktur Data',
    pengalaman : 10, 

    perkenalan() {
        return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
},

statusSenior() {
    if (this.pengalaman >= 10) {
        return `${this.nama} adalah dosen senior.`;
    }
    return `${this.nama} adalah dosen junior.`;
     }
};

console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log('\n=== Iterasi Object ===');
for (const key in mahasiswa) {
    if (typeof dosen[key] !== 'function') {
        console.log(`${key} : ${dosen[key]}`);
    }
}

console.log('Keys:', Object.keys(mahasiswa));
console.log('Values:', Object.values(mahasiswa)); 

console.log("\n=== Latihan 1: Object Buku dan Perpustakaan ===\n");

const buku = {
  judul: "Belajar JavaScript",
  pengarang: "Nasywa",
  tahunTerbit: 2024,
  harga: 100000,
  tersedia: true,

  info() {
    return `
Judul      : ${this.judul}
Pengarang  : ${this.pengarang}
Tahun      : ${this.tahunTerbit}
Harga      : Rp${this.harga}
Tersedia   : ${this.tersedia}
`;
  },

  diskon(persen) {
    return this.harga - (this.harga * persen / 100);
  }
};

console.log("=== Info Buku ===");
console.log(buku.info());
console.log(`Harga setelah diskon 10%: Rp${buku.diskon(10)}\n`);

const koleksiBuku = [
  {
    judul: "JavaScript Dasar",
    pengarang: "Andi",
    tersedia: true
  },
  {
    judul: "Pemrograman Web",
    pengarang: "Budi",
    tersedia: false
  },
  {
    judul: "HTML & CSS",
    pengarang: "Citra",
    tersedia: true
  }
];

console.log("=== Semua Koleksi Buku ===");
koleksiBuku.forEach((item, index) => {
  console.log(`${index + 1}. ${item.judul} - ${item.pengarang}`);
});

const bukuTersedia = koleksiBuku.filter(item => item.tersedia);

console.log("\n=== Buku yang Tersedia ===");
bukuTersedia.forEach((item, index) => {
  console.log(`${index + 1}. ${item.judul} - ${item.pengarang}`);
});