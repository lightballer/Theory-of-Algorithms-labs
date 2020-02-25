'use strict';

const matrix = [[3,2,1,5,4], [5,2,3,4,1], [1,3,5,2,4]];

const x = 1; // 1 is user choise, it refer to array[0]

// For sorting result array
const insertSort = array => {
  for(let i = 1; i < array.length; i++) {
    let x = array[i];
    let j = i;
    while(j > 0 && array[j-1][1] > x[1]) {
      array[j] = array[j-1];
      j = j-1;
    }
    array[j] = x;
  }
  return array;
};

// Finding count of iversions
const inverseSearch = array => {
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    let j = i;
    while(j < array.length) {
      if(array[i] > array[j]) result++;
      j++;
    }
  }
  return result;
};

const countingIversions = matrix => x => {
  let inverseArrays = {};
    for(let i = 0; i < matrix.length; i++){
      let tempArray = [];
      for(let j = 0; j < matrix[i].length; j++) {
      const item = matrix[x-1][j];
      const res = matrix[i].indexOf(item) + 1;
      tempArray.push(res);
      }
      inverseArrays[i+1] = tempArray;
    }
    
    let result = [];
    for(const key in inverseArrays) {
      result.push([parseInt(key), inverseSearch(inverseArrays[key])]);
    }

    return insertSort(result);
};


const result = countingIversions(matrix)(x);
console.log(result);
// [ [ 1, 0 ], [ 3, 3 ], [ 2, 5 ] ]  first value - user number, second - count of inversions
