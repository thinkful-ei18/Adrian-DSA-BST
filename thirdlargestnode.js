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

  function nthLargest (tree, state={n:1, value:null}) {
    if (tree.key === null) {
      return state;
    }

    if (state.n === 0) {
      return state.value;
    }

    if (tree.right) {
      state.n - 1;
      state.value === tree.right.value;
      nthLargest(tree.right, state);
    }

    if (tree.left) {
      state.n - 1;
      state.value === tree.left.value;
      nthLargest(tree.left, state);
    }
  }

  console.log(nthLargest(BST, 1));

  function findThirdLargest (tree) {

  }
  // console.log(util.inspect(BST, false, null));

}


main();

// Third largest node
// Write an algorithm to find the third largest node in a binary search tree

// Traverse through the tree
// Collect a value
// Push value into an array
// Sort the array
// Return 3rd largest item