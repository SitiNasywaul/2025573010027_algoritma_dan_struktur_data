// =============================================
// 1. Rekursi Pangkat
// =============================================
function pangkat(basis, eksponen) {
    if (eksponen === 0) return 1;
    return basis * pangkat(basis, eksponen - 1);
}

// =============================================
// 2. Rekursi Balik String
// =============================================
function balikString(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

// =============================================
// 3. Cek Palindrom
// =============================================
function cekPalindrom(str) {
  const hasilBalik = balikString(str);
  return str=== hasilBalik;
}

// =============================================
// OUTPUT
// =============================================
console.log("=== TUGAS 2: Rekursi ===");

// Uji pangkat
console.log("\n=== UJI PANGKAT: ===");
console.log("2^3 =", pangkat(2, 3));
console.log("5^2 =", pangkat(5, 2));
console.log("3^4 =", pangkat(3, 4));

// Uji balik string
console.log("\n=== UJI BALIK STRING: ===");
console.log("halo ->", balikString("halo"));
console.log("javascript ->", balikString("javascript"));

// Uji palindrom
console.log("\n=== UJI PALINDROM: ===");
const kataUji = ['katak', 'civic', 'level', 'belajar'];
kataUji.forEach(kata => {
  console.log(`Apakah '${kata}' palindrom? ${cekPalindrom(kata) ? 'TRUE' : 'FALSE'}`);
});