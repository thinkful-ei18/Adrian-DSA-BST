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

  // function findHeight (tree, height = 1) {
  //   if (tree.key === null) {
  //     height = 0;
  //     return height;
  //   }

  //   if (!tree.left && !tree.right){
  //     return height;
  //   }

  //   if (tree.right && tree.left) {
  //     let left = findHeight(tree.left, height + 1) ;
  //     let right = findHeight(tree.right, height + 1);
  //     console.log('left', left);
  //     console.log('right', right);

  //     if (left > right) {
  //       return left;
  //     } else {
  //       return right;
  //     }
  //   }
  //   else if (tree.left) {
  //     height++;
  //     findHeight(tree.left, height);
  //   }

  //   else if (tree.right) {
  //     height++;
  //     findHeight(tree.right, height);
  //   }
  //   return height;
  // }
  // // console.log(util.inspect(BST, false, null));
  // // console.log(findHeight(BST));

  function getHeight (tree) {

    if (tree.key === null) {
      return 0;
    }
    if (tree.right && tree.left) {
      return Math.max(getHeight(tree.right), getHeight(tree.left)) + 1;
    }
    if (tree.right) {
      return getHeight(tree.right) + 1;
    }
    if (tree.left) {
      return getHeight(tree.left) + 1;
    }
    return 1;
  }
  console.log(getHeight(BST));

}


main();

// Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the run time of your algorithm?
// input: binary search tree
// output: number

//

// If the key is null, height = 0; return height
// If theres no left or right, return height
// If theres left and right, increment
// If theres a right, increment
// If theres a left, increment