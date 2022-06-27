function createNode(value) {
  return {
    value: value,
    next: null,
  };
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    this.length++;
    let node = createNode(value); // or use new Node(value);

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
      return node;
    }

    this.head = this.tail = node;
    return node;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insert(7);
linkedList.insert(8);
linkedList.insert("safwan");
linkedList.print();
