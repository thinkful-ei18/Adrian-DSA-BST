'use strict';

const binarySearchTree = require('./binarySearchTree');
const util = require('util');

function main () {
  let BST = new binarySearchTree();

  BST.insert(3,3);
  BST.insert(1,1);
  BST.insert(4,4);
  BST.insert(6,6);
  BST.insert(9,9);
  BST.insert(2,2);
  BST.insert(5,5);
  BST.insert(7,7);

  console.log(util.inspect(BST, false, null));
}

main();

// Create a BST class
// Walk through the Binary Search Tree code in the curriculum and understand it well. Then write a Binary Search Tree class and with its core functions (insert, remove, find) from scratch.

// Create a Binary Search Tree called BST and insert 3,1,4,6,9,2,5,7 to your tree. Compare your result with the result from the first exercise