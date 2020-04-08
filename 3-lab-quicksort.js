'use strict';

const array = [30, 19, 9, 15, 55, 24, 3, 78, 46, 41];

let counter = 0;

//Contains only 2 implementation, third is copy from 1)

// First implementation

const swap = (array, firstItem, secondItem) => {
  const temp = array[firstItem];
  array[firstItem] = array[secondItem];
  array[secondItem] = temp;
  counter++;
};

const partition = (array, leftBorder, rightBorder) => {
  const pivot = array[Math.floor((leftBorder + rightBorder)/2)];
  let l = leftBorder;
  let r = rightBorder;

  
  while(l <= r) {
    
    while(array[l] < pivot) {
      l++;
    }
    
    while(array[r] > pivot) {
      r--;
    }
   
    if(l <= r) {
      swap(array, l, r);
      l++;
      r--;
    }
  }  
  
  return l;
};


const quicksortRecursive = (array, leftBorder, rightBorder) => {
  const index = partition(array, leftBorder, rightBorder);
  
  if(leftBorder < index - 1) {
    quicksortRecursive(array, leftBorder, index - 1);
  } 
  if(index < rightBorder) {
    quicksortRecursive(array, index, rightBorder);
  }
  return array;
};

// Second Implementation

const quicksortFor = (array, leftBorder, rightBorder) => {
  for(let i = 0; i < rightBorder; i++) {
    const index = partition(array, leftBorder, rightBorder);
    if(leftBorder < index) {
      partition(array, leftBorder, index);
    } 
    if(index < rightBorder) {
      partition(array, index, rightBorder);
    }
  }
  return array;
};

// Third Implementation


const swap1 = (array, firstItem, secondItem) => {
  const temp = array[firstItem];
  array[firstItem] = array[secondItem];
  array[secondItem] = temp;
};

const partition1 = (array, leftBorder, rightBorder) => {
  const pivot = Math.floor(array[leftBorder] + array[rightBorder] + array[Math.floor(rightBorder+leftBorder)/2]);
  let l = leftBorder;
  let r = rightBorder;

  
  while(l <= r) {
    
    while(array[l] < pivot) {
      l++;
    }
    
    while(array[r] > pivot) {
      r--;
    }
   
    if(l <= r) {
      swap1(array, l, r);
      l++;
      r--;
    }
  }  
  
  return l;
};


const quicksortMedian = (array, leftBorder, rightBorder) => {
  const index = partition(array, leftBorder, rightBorder);
  
  if(leftBorder < index - 1) {
    quicksortRecursive(array, leftBorder, index - 1);
  } 
  if(index < rightBorder) {
    quicksortRecursive(array, index, rightBorder);
  }
  return array;
};





console.log(quicksortRecursive(array, 0, array.length - 1));
console.log(counter);
counter = 0;
console.log(quicksortFor(array, 0, array.length - 1));
console.log(counter);
counter = 0;
console.log(quicksortMedian(array, 0, array.length - 1));
console.log(counter);
counter = 0;