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

  find(data) {
    function findNode(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      return data < node.data
        ? findNode(node.left, data)
        : findNode(node.right, data)
    }
    return findNode(this.tree, data)
  }

  has(data) {
    function hasNode(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      return data < node.data
        ? hasNode(node.left, data)
        : hasNode(node.right, data)
    }
    return hasNode(this.tree, data)
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
