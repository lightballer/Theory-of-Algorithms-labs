'use strict';

const array = [30, 19, 9, 15, 55, 24, 3, 78, 46, 41];


const insertSort = array => {
  for(let i = 1; i < array.length; i++) {
    let x = array[i];
    let j = i;
    while(j > 0 && array[j-1] > x) {
      array[j] = array[j-1];
      j = j-1;
    }
    array[j] = x;
  }
  return array;
};

// Split base array on two with odd and even numbers and use insertSort function for each
const sorting = array => {
  let even = [];
  let odd = [];

  for(const item of array) {
    if (item % 2 == 0) even.push(item);
    else odd.push(item);
  }

  even = insertSort(even);
  odd = insertSort(odd).reverse();

  return [...even, ...odd];
}


const result = sorting(array);
console.log(result);

