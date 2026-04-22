console.log("=== TUGAS 1: Analisis & Refactor ===");

/* =========================
   FUNGSI A: INTERSECTION
   ========================= */

// Versi lambat → O(n^2)
function intersectionLambat(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }

  return result;
}
/*
Time: O(n^2)
Space: O(n)
*/

// Versi cepat → O(n)
function intersectionCepat(arr1, arr2) {
  let set = new Set(arr2);
  let result = [];

  for (let item of arr1) {
    if (set.has(item)) {
      result.push(item);
    }
  }

  return result;
}
/*
Time: O(n)
Space: O(n)
*/

/* =========================
   FUNGSI B: ANAGRAM GROUP
   ========================= */

// O(n * k log k)
function groupAnagram(arr) {
  let map = new Map();

  for (let word of arr) {
    let key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return Array.from(map.values());
}
/*
Time: O(n * k log k)
Space: O(n)
*/

/* =========================
   FUNGSI C: 3 SUM
   ========================= */

// Versi lambat → O(n^3)
function threeSumLambat(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] === arr[k]) {
          return true;
        }
      }
    }
  }

  return false;
}
/*
Time: O(n^3)
Space: O(1)
*/

// Versi cepat → O(n log n)
function threeSumCepat(arr) {
  arr.sort((a, b) => a - b); // O(n log n)

  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = arr[i] + arr[left];

      if (sum === arr[right]) {
        return true;
      } else if (sum < arr[right]) {
        left++;
      } else {
        right--;
      }
    }
  }

  return false;
}
/*
Time: O(n log n)
Space: O(1)
*/

/* =========================
   TESTING
   ========================= */

console.log("\n-- Fungsi A --");
console.log(intersectionLambat([1, 2, 3], [2, 3, 4]));
console.log(intersectionCepat([1, 2, 3], [2, 3, 4]));

console.log("\n-- Fungsi B --");
console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log("\n-- Fungsi C --");
console.log(threeSumLambat([2, 7, 11, 15])); // true
console.log(threeSumCepat([2, 7, 11, 15])); // true

/* =========================
   UKUR WAKTU
   ========================= */

function testWaktu(fn, ...args) {
  let start = Date.now();
  fn(...args);
  let end = Date.now();
  console.log(`${fn.name}: ${end - start} ms`);
}

// data besar
let bigArr = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 10000),
);

console.log("\n-- UJI WAKTU --");
testWaktu(threeSumLambat, bigArr);
testWaktu(threeSumCepat, bigArr);
