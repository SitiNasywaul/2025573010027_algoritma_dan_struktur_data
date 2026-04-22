console.log("=== LATIHAN 1: Kompleksitas ===");

// Fungsi A → O(1)
function A(n) {
  return n * 2;
}

// Fungsi B → O(n^2)
function B(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // console.log(i, j);
    }
  }
}

// Fungsi C → O(log n)
function C(n) {
  for (let i = 1; i < n; i *= 2) {
    // console.log(i);
  }
}

// Fungsi D → O(n^3)
function D(n) {
  let arr = new Array(n).fill(0);
  arr.forEach(() =>
    arr.forEach(() =>
      arr.forEach(() => {
        // console.log("x");
      }),
    ),
  );
}

// Fungsi ukur waktu
function hitungKompleksitas(n, fn) {
  let start = Date.now();
  fn(n);
  let end = Date.now();
  console.log(`${fn.name}: ${end - start} ms`);
}

// Jalankan Latihan 1
hitungKompleksitas(1000, A);
hitungKompleksitas(1000, B);
hitungKompleksitas(1000, C);
hitungKompleksitas(1000, D);
