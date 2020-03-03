'use strict';

const heapify = (array, n, i) => {
  let max = i;
  
  let l = 2*i + 1;
  let r = 2*i + 2;
  
  if(l < n && array[l] > array[max]) {
    max = l;
  }
  if(r < n && array[r] > array[max]) {
    max = r;
  }

  if(max != i) {
    let temp = array[max];
    array[max] = array[i];
    array[i] = temp;
    heapify(array, n, max);
  }
};

const heapSort = (array) => {
  let n = array.length;
  for (let i = n /2 - 1; i >= 0; i--) {
    heapify(array, n, i);
  }
  for (let i = n - 1; i >= 0; i--) {
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapify(array, i, 0);
  }
};

const findMedian = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
        console.log('Median of ' + i + ' is : ' + array[i / 2]);
    } else {
        console.log('Medians of ' + i + 'are : ' + array[Math.floor(i / 2)] + ', ' + array[Math.floor(i / 2 + 1)] + ' and  result is: ' + (array[Math.floor(i / 2)] + array[Math.floor(i / 2 + 1)])/2);
    }
}
};

let array = [30, 19, 9, 15, 55, 24, 3, 78, 46, 41];
heapSort(array);
findMedian(array);
console.log(array);


