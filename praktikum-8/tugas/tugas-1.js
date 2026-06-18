class HashMapLinearProbing {
  constructor(capacity = 8) {
    this.capacity = capacity;
    this.size = 0;
    this.table = new Array(capacity);
    this.DELETED = { deleted: true };
  }

  hash(key) {
    let hash = 0;
    for (let char of key.toString()) {
      hash += char.charCodeAt(0);
    }
    return hash % this.capacity;
  }

  put(key, value) {
    if ((this.size + 1) / this.capacity > 0.7) {
      this.resize();
    }

    let index = this.hash(key);

    while (
      this.table[index] !== undefined &&
      this.table[index] !== this.DELETED &&
      this.table[index].key !== key
    ) {
      index = (index + 1) % this.capacity;
    }

    if (this.table[index] === undefined || this.table[index] === this.DELETED) {
      this.size++;
    }

    this.table[index] = { key, value };
  }

  get(key) {
    let index = this.hash(key);
    let start = index;

    while (this.table[index] !== undefined) {
      if (this.table[index] !== this.DELETED && this.table[index].key === key) {
        return this.table[index].value;
      }

      index = (index + 1) % this.capacity;

      if (index === start) break;
    }

    return null;
  }

  delete(key) {
    let index = this.hash(key);
    let start = index;

    while (this.table[index] !== undefined) {
      if (this.table[index] !== this.DELETED && this.table[index].key === key) {
        this.table[index] = this.DELETED;
        this.size--;
        return true;
      }

      index = (index + 1) % this.capacity;

      if (index === start) break;
    }

    return false;
  }

  resize() {
    const oldTable = this.table;

    this.capacity *= 2;
    this.table = new Array(this.capacity);
    this.size = 0;

    for (let item of oldTable) {
      if (item && item !== this.DELETED) {
        this.put(item.key, item.value);
      }
    }
  }

  display() {
    console.log(this.table);
  }
}

// Testing
const map = new HashMapLinearProbing();

map.put("A", 10);
map.put("B", 20);
map.put("C", 30);

console.log(map.get("B")); // 20

map.delete("B");

console.log(map.get("B")); // null

map.display();
