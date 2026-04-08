const mahasiswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Siti", nilai: 92 },
  { nama: "Ahmad", nilai: 70 },
  { nama: "Rina", nilai: 60 },
  { nama: "Doni", nilai: 45 }
];

// Statistik nilai
function statistikNilai(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce(
    (acc, mhs) => {
      acc.total += 1;
      acc.jumlah += mhs.nilai;

      if (mhs.nilai > acc.tertinggi) acc.tertinggi = mhs.nilai;
      if (mhs.nilai < acc.terendah) acc.terendah = mhs.nilai;

      return acc;
    },
    {
      total: 0,
      jumlah: 0,
      tertinggi: -Infinity,
      terendah: Infinity
    }
  );

  return {
    total: hasil.total,
    rataRata: hasil.jumlah / hasil.total,
    tertinggi: hasil.tertinggi,
    terendah: hasil.terendah
  };
}

// Filter mahasiswa lulus
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

// Tambah grade
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map(mhs => {
    let grade;

    if (mhs.nilai >= 90) grade = "A";
    else if (mhs.nilai >= 80) grade = "B";
    else if (mhs.nilai >= 70) grade = "C";
    else if (mhs.nilai >= 60) grade = "D";
    else grade = "E";

    return { ...mhs, grade };
  });
}

// OUTPUT
console.log("=== TUGAS 1: Sistem Nilai Mahasiswa ===");
console.log(statistikNilai(mahasiswa));

console.log("\nMahasiswa Lulus:");
console.log(filterLulus(mahasiswa, 70));

console.log("\nMahasiswa + Grade:");
tambahGrade(mahasiswa).forEach(mhs => {
  console.log(`${mhs.nama} - ${mhs.nilai} - Grade ${mhs.grade}`);
});