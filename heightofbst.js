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

  function findHeight (tree) {

  }

  console.log(util.inspect(BST, false, null));
}

main();

// Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the run time of your algorithm?
// input: binary search tree
// output: console.logged binary search tree