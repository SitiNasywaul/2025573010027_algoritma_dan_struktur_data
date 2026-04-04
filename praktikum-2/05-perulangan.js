// 05-perulangan.js
// =============================================
// PERULANGAN: for, while, break, continue
// =============================================

// --- FOR LOOP ---
// Struktur: for (inisialisasi; kondisi; update)
console.log('=== For Loop: Hitung 1 sampai 5 ===');
for (let i = 1; i <= 5; i++) {
    console.log(`Iterasi ke-${i}`);
}

// --- WHILE LOOP ---
console.log('\n=== While Loop: Countdown ===');
let hitung = 5;
while (hitung > 0) {
    console.log(`Hitung mundur: ${hitung}`);
    hitung--; // WAJIB: kurangi nilai agar loop tidak berjalan selamanya
}
console.log('Selesai!');

// --- FOR LOOP: Mencetak bilangan genap ---
console.log('\n=== Bilangan Genap antara 1 - 20 ===');
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { // jika i habis dibagi 2 (sisa = 0), maka genap
    process.stdout.write(i + ' '); // cetak di baris yang sama
}
}

//--- Latihan 3: Segitiga bintang dan Deret Fibonacci ---

// --- BAGIAN A ---
// Segitiga Bintang

for (let i = 1; i <= 5; i++) {
  let baris = "";
  
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  
  console.log(baris);
}

// --- BAGIAN B ---
// Deret Bilangan Prima 1 - 50

for (let i = 1; i <= 50; i++) {
  let prima = true;

  if (i < 2) {
    prima = false;
  } else {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prima = false;
        break;
      }
    }
  }

  if (prima) {
    console.log(i);
  }
}