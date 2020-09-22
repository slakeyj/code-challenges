const { BinaryTree, Node } = require('./binaryTree')

describe('preOrder', () => {

  const tree = new BinaryTree();
  tree.insert(1);
  tree.insert(2);
  tree.insert(3)
  console.log('tree', tree)
  it('traverses a tree in the appropriate order', () => {
    expect(tree.preOrder(tree.root)).toEqual([1, 2, 3])
  })
})