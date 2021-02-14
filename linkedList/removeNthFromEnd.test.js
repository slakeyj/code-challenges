const removeNthFromEnd = require('./removeNthFromEnd');
const { Node } = require('./linkedList');

const listToArray = head => {
  const values = [];
  let current = head;
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  return values;
};

const arrayToList = array => {
  const [first, ...rest] = array;
  const head = new Node(first);
  let previous = head;

  rest.forEach(current => {
    const node = new Node(current);
    previous.next = node;
    previous = node;
  });

  return head;
};

describe('removeNthFromEnd', () => {
  it('removes the nth node from the end of a linked list for example one', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const newList = removeNthFromEnd(head, 2);
    const values = listToArray(newList);
    expect(values).toEqual([1, 2, 3, 5]);
  });

  it('removes the nth node from the end of a linked list for example two', () => {
    const head = arrayToList([1]);
    const newList = removeNthFromEnd(head, 1);
    const values = listToArray(newList);
    expect(values).toEqual([]);
  });

  it('removes the nth node from the end of a linked list for example three', () => {
    const head = arrayToList([1, 2]);
    const newList = removeNthFromEnd(head, 1);
    const values = listToArray(newList);
    expect(values).toEqual([1]);
  });
});
