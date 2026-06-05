// tugas-2.js

class MinStack {
  constructor() {
    this.stack = []; // stack utama
    this.minStack = []; // stack untuk menyimpan nilai minimum
  }

  // Menambah data
  push(value) {
    this.stack.push(value);

    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }
  }

  // Menghapus data teratas
  pop() {
    if (this.stack.length === 0) {
      return "Stack kosong";
    }

    const removed = this.stack.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return removed;
  }

  // Melihat data teratas
  peek() {
    if (this.stack.length === 0) {
      return "Stack kosong";
    }

    return this.stack[this.stack.length - 1];
  }

  // Mengambil nilai minimum
  getMin() {
    if (this.minStack.length === 0) {
      return "Stack kosong";
    }

    return this.minStack[this.minStack.length - 1];
  }

  // Mengecek apakah stack kosong
  isEmpty() {
    return this.stack.length === 0;
  }

  // Menampilkan isi stack
  display() {
    console.log("Stack:", this.stack);
  }
}

// ====================
// Pengujian Program
// ====================

const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

ms.display();

console.log("Nilai minimum:", ms.getMin()); // 2

console.log("Pop:", ms.pop()); // hapus 2

console.log("Nilai minimum setelah pop:", ms.getMin()); // 3

console.log("Pop:", ms.pop()); // hapus 7

console.log("Nilai minimum sekarang:", ms.getMin()); // 3
