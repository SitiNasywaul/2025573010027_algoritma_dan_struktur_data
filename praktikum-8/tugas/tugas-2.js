// ======================================
// TUGAS 2 - SOAL KLASIK HASH TABLE
// ======================================

// ======================================
// SOAL 1
// subArrayJumlahK(arr, k)
// Menghitung jumlah subarray yang
// jumlah elemennya = k
// ======================================

function subArrayJumlahK(arr, k) {
  const map = new Map();
  map.set(0, 1);

  let prefixSum = 0;
  let count = 0;

  for (let num of arr) {
    prefixSum += num;

    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count;
}

// ======================================
// SOAL 2
// karakterPertamaUnik(s)
// Mengembalikan indeks karakter pertama
// yang tidak berulang
// ======================================

function karakterPertamaUnik(s) {
  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

// ======================================
// SOAL 3
// topKFrequent(arr, k)
// Mengembalikan k elemen yang paling
// sering muncul
// ======================================

function topKFrequent(arr, k) {
  const map = new Map();

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const hasil = [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => item[0]);

  return hasil;
}

// ======================================
// PENGUJIAN PROGRAM
// ======================================

console.log("===== SOAL 1 =====");
const arr1 = [1, 1, 1];
const k1 = 2;

console.log("Array :", arr1);
console.log("k =", k1);
console.log("Jumlah Subarray =", subArrayJumlahK(arr1, k1));

console.log("\n===== SOAL 2 =====");
const str = "leetcode";

console.log("String :", str);
console.log("Indeks Karakter Pertama Unik =", karakterPertamaUnik(str));

console.log("\n===== SOAL 3 =====");
const arr2 = [1, 1, 1, 2, 2, 3];
const k2 = 2;

console.log("Array :", arr2);
console.log("k =", k2);
console.log("Top K Frequent =", topKFrequent(arr2, k2));
