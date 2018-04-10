'use strict';

const binarySearchTree = require('./binarySearchTree');
const util = require('util');

function main () {
  let BST = new binarySearchTree();



  console.log(util.inspect(BST, false, null));
}

main();