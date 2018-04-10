'use strict';

const binarySearchTree = require('./binarySearchTree');
const util = require('util');

function main () {
  let BST = new binarySearchTree();

  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);

  function isBST (tree) {
    if (tree.left.value > tree.value) {
      // check left tree for its value
      return false;
    }
    else if (tree.right.value < tree.value) {
      // check right tree for its value
      return false;
    }
    else {
      return true;
    }
  }
  console.log(isBST(BST));
}


main();

// is it BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates