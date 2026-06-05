// tugas-1.js

// ==========================
// Node
// ==========================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ==========================
// Queue Linked List
// ==========================
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const node = new Node(data);

    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const data = this.head.data;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.size--;
    return data;
  }

  isEmpty() {
    return this.size === 0;
  }

  front() {
    return this.head ? this.head.data : null;
  }

  print() {
    let current = this.head;
    let hasil = "";

    while (current) {
      hasil += `${current.data.nama} (${current.data.prioritas}) -> `;
      current = current.next;
    }

    console.log(hasil || "Kosong");
  }
}

// ==========================
// Class Pasien
// ==========================
class Pasien {
  constructor(id, nama, prioritas) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas; // darurat / biasa
    this.waktuDaftar = new Date().toLocaleTimeString();
  }
}

// ==========================
// Class Antrian RS
// ==========================
class AntrianRS {
  constructor() {
    this.antrianDarurat = new Queue();
    this.antrianBiasa = new Queue();
  }

  daftar(pasien) {
    if (pasien.prioritas === "darurat") {
      this.antrianDarurat.enqueue(pasien);
    } else {
      this.antrianBiasa.enqueue(pasien);
    }

    console.log(`${pasien.nama} berhasil didaftarkan (${pasien.prioritas})`);
  }

  layani() {
    let pasien;

    if (!this.antrianDarurat.isEmpty()) {
      pasien = this.antrianDarurat.dequeue();
    } else if (!this.antrianBiasa.isEmpty()) {
      pasien = this.antrianBiasa.dequeue();
    } else {
      console.log("Tidak ada pasien dalam antrian.");
      return;
    }

    console.log(
      `Melayani: ${pasien.nama} | ID: ${pasien.id} | Prioritas: ${pasien.prioritas}`,
    );
  }

  tampilkanAntrian() {
    console.log("\n=== ANTRIAN DARURAT ===");
    this.antrianDarurat.print();

    console.log("\n=== ANTRIAN BIASA ===");
    this.antrianBiasa.print();

    console.log("\n");
  }
}

// ==========================
// Simulasi
// ==========================

const rs = new AntrianRS();

const namaPasien = [
  "Andi",
  "Budi",
  "Citra",
  "Dina",
  "Eka",
  "Farhan",
  "Gina",
  "Hadi",
  "Intan",
  "Joko",
];

// daftar 10 pasien acak
for (let i = 0; i < 10; i++) {
  const prioritas = Math.random() < 0.4 ? "darurat" : "biasa";

  const pasien = new Pasien(i + 1, namaPasien[i], prioritas);

  rs.daftar(pasien);
}

console.log("\nSTATUS ANTRIAN AWAL");
rs.tampilkanAntrian();

console.log("=== PROSES PELAYANAN ===");

while (!rs.antrianDarurat.isEmpty() || !rs.antrianBiasa.isEmpty()) {
  rs.layani();
}

console.log("\nSemua pasien telah dilayani.");
