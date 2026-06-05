class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  removeHead() {
    if (!this.head) {
      return null;
    }

    const removed = this.head.data;
    this.head = this.head.next;

    this.length--;

    return removed;
  }

  getHead() {
    return this.head ? this.head.data : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }

    result += "null";

    console.log(result);
  }
}

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.prepend(data);
  }

  pop() {
    return this.list.removeHead();
  }

  peek() {
    return this.list.getHead();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.size();
  }

  print() {
    this.list.print();
  }
}

// Demo Stack
const stack = new Stack();

stack.push("Aksi 1");
stack.push("Aksi 2");
stack.push("Aksi 3");

console.log("Isi stack:");
stack.print();

console.log("Undo:", stack.pop());

console.log("Setelah undo:");
stack.print();

console.log("Peek:", stack.peek());
console.log("Size:", stack.size());
console.log("Kosong?", stack.isEmpty());
