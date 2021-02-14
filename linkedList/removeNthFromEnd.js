const removeNthFromEnd = (head, n) => {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  if (length === n) {
    return head.next;
  }

  const precedingNodeIndex = length - n - 1;
  current = head;
  for (let i = 0; i < precedingNodeIndex; i++) {
    current = current.next;
  }

  if (current.next) {
    current.next = current.next.next;
  }
  return head;
};

module.exports = removeNthFromEnd;
