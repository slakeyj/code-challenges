const { Node, LinkedList } = require('./linkedList')

describe('LinkedList', () => {
  it('should be able to instantiate an empty LinkedList', () => {
    const newList = new LinkedList;
    expect(newList.head).toEqual(null)
  })
  it('should be able to set a Linked List with a single value in it', () => {
    const node = new Node(4);
    const newList = new LinkedList(node);
    expect(newList.head.value).toEqual(4);
  })
  it('should be able to create a linked list with multiple values in it', () => {
    const node = new Node(4);
    const newList = new LinkedList(node);
    newList.head.next = new Node(5)
    newList.head.next.next = new Node(6);
    expect(newList.head.next.next.value).toEqual(6)
  })

  describe('insert', () => {
    it('takes in a value and adds a new node with that value to the head', () => {
      const node = new Node(4);
      const newList = new LinkedList(node);
      newList.insert(3)
      expect(newList.head.value).toEqual(3)
    })
  })

  describe('includes', () => {
    it('returns a boolean result depending on whether a value exists in the linked list', () => {
      const node = new Node(4);
      const newList = new LinkedList(node);
      newList.insert(3)
      newList.insert(2)
      newList.insert(1)
      expect(newList.includes(3)).toBeTruthy();
      expect(newList.includes(8)).toBeFalsy();
    })
  })

  describe('toString', () => {
    it('returns a string representing the linked list', () => {
      const node = new Node(4);
      const newList = new LinkedList(node);
      newList.insert(3)
      newList.insert(2)
      newList.insert(1)
      expect(newList.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL')
    })
  })

  describe('append', () => {
    it('inserts a value at the end of the linked list', () => {
      const node = new Node(4);
      const newList = new LinkedList(node);
      newList.insert(3);
      newList.append(5);
      // console.log('list', newList.head.next.next.value)
      expect(newList.head.next.next.value).toEqual(5)
    })

  })

  describe('insertBefore', () => {
    it('inserts the new value before the given value', () => {
      const node = new Node(4);
      const newList = new LinkedList(node);
      newList.insert(3)
      newList.insert(1)
      newList.insertBefore(3, 2)
      expect(newList.head.next.value).toEqual(2);
    })
  })

  describe('insertAfter', () => {
    it('inserts the new value after the given value', () => {
      const node = new Node(4);
      const newList = new LinkedList(node);
      newList.insert(3)
      newList.insertAfter(4, 5);
      expect(newList.head.next.next.value).toEqual(5);
    })
  })

  describe('findKthValue', () => {

    it('can return a value from the middle of the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.insert(3);
      linkedList.insert(2);
      linkedList.insert(1);
      console.log(linkedList)
      expect(linkedList.findKthValue(0)).toEqual(3);
      expect(linkedList.findKthValue(1)).toEqual(2);
      expect(linkedList.findKthValue(2)).toEqual(1);
    })
    it('throws an exception when k is greater than the length of the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.insert(3);
      linkedList.insert(2);
      linkedList.insert(1);
      expect(() => { linkedList.findKthValue(5) }).toThrowError('Please enter a valid number');
    })

    it('returns the correct value when k and the length of the list are the same', () => {
      const linkedList = new LinkedList();
      linkedList.insert(3);
      linkedList.insert(2);
      linkedList.insert(1);
      expect(linkedList.findKthValue(2)).toEqual(1);
    })

    it('throws an exception when k is a negative integer', () => {
      const linkedList = new LinkedList();
      linkedList.insert(3);
      linkedList.insert(2);
      linkedList.insert(1);
      expect(() => { linkedList.findKthValue(-2) }).toThrow();
    })

    it('works with a linked list with a size of 1', () => {
      const linkedList = new LinkedList();
      linkedList.insert(3);
      expect(linkedList.findKthValue(0)).toEqual(3);
    })

  })



})