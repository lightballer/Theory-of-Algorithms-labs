'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.resultArray = [];
  }

  insert(data) { 
    var newNode = new Node(data); 
    if(this.root === null) this.root = newNode; 
    else this.insertNode(this.root, newNode); 
  } 
  
  insertNode(node, newNode) {     
    if(newNode.data < node.data) { 
      if(node.left === null)
        node.left = newNode; 
      else 
        this.insertNode(node.left, newNode);  
    }  
    else { 
      if(node.right === null) 
        node.right = newNode; 
      else 
        this.insertNode(node.right, newNode); 
    } 
  }
  
  inorder(node) { 
    if(node !== null) { 
      this.inorder(node.left); 
      this.resultArray.push(node.data);
      this.inorder(node.right); 
    }
  } 

  getRootNode() { 
    return this.root; 
  }
  
  findRoutes(S, node = this.root, route = []) {
    let amount = 0;
    if (node != null) {
      route.push(node.data);
      for(let item of route) {
        amount += item;
      }
      if(amount == S) {
        console.log('Amount: ' + amount);
        for(let item of route) {
          console.log(item);
        }
      } else if(amount < S) {
          if(node.left != null) {
            this.findRoutes(S, node.left, route)
          }
          if(node.right != null) {
            this.findRoutes(S, node.right, route);
          }
        }
    if(node.left != null) {
      this.findRoutes(S, node.left, []);
    }
    if(node.right != null) {
      this.findRoutes(S, node.right, []);
    }

}
  }
}

const insertion = (array, instant) => {
  for(let i = 0; i < array.length; i++) {
    instant.insert(array[i]);
  }
};

// Tests

const array = [30, 19, 9, 15, 55, 24, 3, 78, 46, 41];
const BST = new BinarySearchTree();
insertion(array, BST);
const node = BST.getRootNode();
BST.inorder(node);
console.log(BST.resultArray);
BST.findRoutes(49); //output Amount: 49   30 19