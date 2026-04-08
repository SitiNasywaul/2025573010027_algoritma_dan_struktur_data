// ===============================
// 1. Rekursi Pangkat
// ===============================
function pangkat(basis, eksponen) {
  if (eksponen === 0) return 1; // base case
  return basis * pangkat(basis, eksponen - 1);
}


// ===============================
// 2. Rekursi Balik String
// ===============================
function balikString(str) {
  if (str.length <= 1) return str; // base case
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}


// ===============================
// 3. Cek Palindrom
// ===============================
function cekPalindrom(str) {
  const hasilBalik = balikString(str);
  return str === hasilBalik;
}


// ===============================
// OUTPUT
// ===============================
console.log("=== TUGAS 2: Rekursi ===");

// Uji pangkat
console.log("2^3 =", pangkat(2, 3));
console.log("5^2 =", pangkat(5, 2));
console.log("3^4 =", pangkat(3, 4));

// Uji balik string
console.log("\nBalik String:");
console.log("halo ->", balikString("halo"));
console.log("javascript ->", balikString("javascript"));

// Uji palindrom
console.log("\nCek Palindrom:");
["katak", "civic", "level", "halo"].forEach(kata => {
  console.log(`${kata} = ${cekPalindrom(kata)}`);
});