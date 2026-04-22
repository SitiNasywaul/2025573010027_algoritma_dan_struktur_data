console.log("=== TUGAS 2: Visualisasi Big O ===");

/* =========================
   DEFINISI FUNGSI
   ========================= */

// O(1)
function fn_O1(n) {
  return n + 1;
}

// O(n)
function fn_On(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// O(n log n)
function fn_OnLogn(n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    // log2(n)
    for (let j = 1; j < n; j *= 2) {
      count++;
    }
  }

  return count;
}

// O(n^2)
function fn_On2(n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }

  return count;
}

/* =========================
   BENCHMARK
   ========================= */

function ukur(fn, n) {
  let start = Date.now();
  fn(n);
  let end = Date.now();
  return end - start;
}

function benchmarkSemua(ukuranData) {
  for (let n of ukuranData) {
    console.log(`\nUkuran n = ${n}`);

    console.log("O(1)     :", ukur(fn_O1, n), "ms");
    console.log("O(n)     :", ukur(fn_On, n), "ms");
    console.log("O(n log n):", ukur(fn_OnLogn, n), "ms");
    console.log("O(n^2)   :", ukur(fn_On2, n), "ms");
  }
}

/* =========================
   JALANKAN
   ========================= */

benchmarkSemua([100, 500, 1000, 5000, 10000]);

/* =========================
   ANALISIS (KOMENTAR)
   ========================= */

/*
Hasil yang diamati:

1. O(1):
   Waktu hampir konstan, tidak terpengaruh n.

2. O(n):
   Waktu bertambah secara linear seiring n.

3. O(n log n):
   Lebih cepat dari O(n^2), tapi lebih lambat dari O(n).

4. O(n^2):
   Pertumbuhan paling cepat, sangat terasa saat n besar.

Kesimpulan:
Pola pertumbuhan sesuai teori Big O.
Semakin tinggi kompleksitas, semakin cepat waktu eksekusi meningkat.
*/
