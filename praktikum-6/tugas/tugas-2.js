// tugas-2.js

// ==============================
// Class Node
// ==============================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ==============================
// Membuat Linked List dari Array
// ==============================
function buatList(arr) {
  if (!arr.length) return null;

  const head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

// ==============================
// Cetak Linked List
// ==============================
function printList(head) {
  let current = head;
  let result = "";

  while (current) {
    result += current.next ? `[${current.data}] → ` : `[${current.data}]`;

    current = current.next;
  }

  console.log(result);
}

// ==============================
// 1. Cek Palindrom
// Big O: O(n)
// ==============================
function palindromLL(head) {
  const arr = [];
  let current = head;

  while (current) {
    arr.push(current.data);
    current = current.next;
  }

  let kiri = 0;
  let kanan = arr.length - 1;

  while (kiri < kanan) {
    if (arr[kiri] !== arr[kanan]) {
      return false;
    }

    kiri++;
    kanan--;
  }

  return true;
}

// ==============================
// 2. Hapus Node ke-N dari Akhir
// Big O: O(n)
// ==============================
function hapusNDariAkhir(head, n) {
  const dummy = new Node(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}

// ==============================
// 3. Cari Node Tengah
// Big O: O(n)
// ==============================
function tengahLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// ==============================
// TESTING
// ==============================

console.log("=== PALINDROM ===");

const p1 = buatList([1, 2, 3, 2, 1]);
printList(p1);
console.log("Palindrom:", palindromLL(p1));

const p2 = buatList([1, 2, 2, 1]);
printList(p2);
console.log("Palindrom:", palindromLL(p2));

const p3 = buatList([1, 2, 3, 4]);
printList(p3);
console.log("Palindrom:", palindromLL(p3));

// ==============================

console.log("\n=== HAPUS N DARI AKHIR ===");

const h1 = buatList([1, 2, 3, 4, 5]);
printList(h1);

const hasilHapus = hapusNDariAkhir(h1, 2);

printList(hasilHapus);

// ==============================

console.log("\n=== NODE TENGAH ===");

const t1 = buatList([1, 2, 3, 4, 5]);
printList(t1);

const tengah1 = tengahLinkedList(t1);
console.log("Node tengah:", tengah1.data);

const t2 = buatList([1, 2, 3, 4, 5, 6]);
printList(t2);

const tengah2 = tengahLinkedList(t2);
console.log("Node tengah:", tengah2.data);

const t3 = buatList([10, 20, 30]);
printList(t3);

const tengah3 = tengahLinkedList(t3);
console.log("Node tengah:", tengah3.data);
