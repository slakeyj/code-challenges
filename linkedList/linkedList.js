class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
      linkedListString += `{ ${current.value.toString()} } -> `
      current = current.next;
    }
    linkedListString += 'NULL'
    return linkedListString;
  }

  append(number) {

  }
}

module.exports = { Node, LinkedList };