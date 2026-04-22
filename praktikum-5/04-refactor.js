function adaDuplikatLambat(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++) if (arr[i] === arr[j]) return true;
  return false;
}

function adaDuplikatCepat(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}
function frekuensiLambat(arr) {
  const unik = [];
  const hitung = [];
  for (const x of arr) {
    const idx = unik.indexOf(x); // O(n) di dalam loop O(n)
    if (idx === -1) {
      unik.push(x);
      hitung.push(1);
    } else hitung[idx]++;
  }
  return Object.fromEntries(unik.map((u, i) => [u, hitung[i]]));
}
function frekuensiCepat(arr) {
  const counter = {};
  for (const x of arr) counter[x] = (counter[x] || 0) + 1;
  return counter;
}

const besar = Array.from({ length: 20000 }, () =>
  Math.floor(Math.random() * 1000),
);

let t = Date.now();
adaDuplikatLambat(besar);
console.log("Duplikat LAMBAT O(n2):", Date.now() - t, "ms");

t = Date.now();
adaDuplikatCepat(besar);
console.log("Duplikat CEPAT O(n) :", Date.now() - t, "ms");

const kata = ["a", "b", "a", "c", "b", "a", "d"];
console.log("\nFrekuensi:", frekuensiCepat(kata));

console.log("\n=== LATIHAN 3: Cari Pasangan ===");
// Fungsi lambat → O(n^2)
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

// Fungsi cepat → O(n)
function cariPasanganCepat(arr, target) {
  let set = new Set();

  for (let num of arr) {
    let pasangan = target - num;

    if (set.has(pasangan)) {
      return [pasangan, num];
    }

    set.add(num);
  }

  return null;
}

// Test kecil
let arr = [2, 7, 11, 15];
let target = 9;

console.log("Lambat:", cariPasanganLambat(arr, target));
console.log("Cepat :", cariPasanganCepat(arr, target));

// Test waktu besar
function testWaktu(fn, arr, target) {
  let start = Date.now();
  fn(arr, target);
  let end = Date.now();
  console.log(`${fn.name}: ${end - start} ms`);
}

// generate 50.000 data
let bigArr = Array.from({ length: 50000 }, () =>
  Math.floor(Math.random() * 100000),
);

let targetBesar = -1;

console.log("\n=== UJI WAKTU ===");
testWaktu(cariPasanganLambat, bigArr, targetBesar);
testWaktu(cariPasanganCepat, bigArr, targetBesar);
