function fibonacci(n) {
    
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('\n=== Fibonacci ===');
for (let i = 0; i <= 8; i++) {
    process.stdout.write(fibonacci(i) + ' ');
}
console.log('');

function jumlahArray(arr, indeks = 0) {
    if (indeks === arr.length) return 0;
    return arr[indeks] + jumlahArray(arr, indeks + 1);
}

const angka = [3, 7, 2, 9, 5];
console.log('\n=== Jumlah Array dengan Rekursi ===');
console.log('Array :', angka);
console.log('Jumlah :', jumlahArray(angka)); // 26

function countdown(n) {
    if (n < 0) {
        console.log('Selesai!');
        return;
    }
        console.log(n);
        countdown(n - 1);
}

console.log('\n=== Countdown Rekursif ===');
countdown(5);