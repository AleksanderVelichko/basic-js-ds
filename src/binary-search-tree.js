const { NotImplementedError } = require('../lib/errors')
const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null
  }
  root() {
    return this.tree
  }

  add(data) {
    this.tree = addNode(this.tree, data)

    function addNode(node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data)
      }

      return node
    }
  }

  find(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented')
  }

  has(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented')
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented')
  }

  min() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented')
  }

  max() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented')
  }
}

module.exports = {
  BinarySearchTree,
}
