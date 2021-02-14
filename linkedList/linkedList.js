class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(number) {
    const newNode = new Node(number);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(number) {
    let current = this.head;
    while (current.next) {
      if (current.value === number) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let linkedListString = '';
    while (current) {
      linkedListString += `{ ${current.value.toString()} } -> `;
      current = current.next;
    }
    linkedListString += 'NULL';
    return linkedListString;
  }

  append(number) {
    if (!this.head) {
      this.head = new Node(number);
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(number);
  }

  insertBefore(value, newValue) {
    let current = this.head;
    let previous;
    while (current.next) {
      if (current.value === value) {
        let nodeToMove = current;
        current = new Node(newValue);
        previous.next = current;
        current.next = nodeToMove;
        return;
      }
      previous = current;
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        current.next = new Node(newValue, current.next);
        return;
      }
      current = current.next;
    }
  }

  findKthValue(k) {
    let current = this.head;
    let nodeValues = [];
    // takes in value k, and, starting from the end of the linked list, finds that place in the linked list and returns the value
    while (current) {
      nodeValues.unshift(current.value);
      current = current.next;
    }
    if (k > nodeValues.length || k < 0) {
      throw 'Please enter a valid number';
    }
    return nodeValues[k];
  }
}

module.exports = { Node, LinkedList };
