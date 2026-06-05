class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log("Index di luar batas!");
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;

    this.size++;
  }

  delete(data) {
    if (!this.head) return false;

    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return true;
      }

      current = current.next;
    }

    return false;
  }

  search(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  print() {
    if (!this.head) {
      console.log("[List kosong]");
      return;
    }

    let result = "";
    let current = this.head;

    while (current) {
      result += current.data;

      if (current.next) {
        result += " -> ";
      }

      current = current.next;
    }

    console.log(result, `(size: ${this.size})`);
  }

  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  toArray() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }

  // ======================
  // LATIHAN 1
  // ======================

  getAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.data;
  }

  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      current.next = current.next.next;
    }

    this.size--;
  }

  indexOf(data) {
    return this.search(data);
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }
}

// ======================
// UJI COBA AWAL
// ======================

const list = new LinkedList();

console.log("=== Append ===");
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();

console.log("\n=== Prepend ===");
list.prepend(5);
list.print();

console.log("\n=== Insert di indeks 2 ===");
list.insertAt(15, 2);
list.print();

console.log("\n=== Search ===");
console.log("Index 20:", list.search(20));
console.log("Index 99:", list.search(99));

console.log("\n=== Delete 20 ===");
list.delete(20);
list.print();

console.log("\n=== Reverse ===");
list.reverse();
list.print();

// ======================
// LATIHAN 1
// ======================

console.log("\n=== LATIHAN 1 ===\n");

console.log("Data pada index 1:", list.getAt(1));

console.log("Index dari data 30:", list.indexOf(30));

console.log("Apakah list kosong?", list.isEmpty());

list.deleteAt(1);

console.log("Setelah delete index 1:");
list.print();

list.clear();

console.log("Setelah clear:");
list.print();

console.log("Apakah list kosong?", list.isEmpty());
