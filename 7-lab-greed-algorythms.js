'use strict';

const greedy = matrix => {
  const visitedVerteces = [];
  const result = {
    route: [],
    length: 0,
  }

  let i = 0;
  do {
    visitedVerteces.push(i);
    const minRoute = {
      value: Infinity,
      index: Infinity,
    }
    for(let j = 0; j < matrix.length; j++) {
      if(visitedVerteces.includes(j)) {
        continue;
      }
      if(matrix[i][j] < minRoute.value) {
        minRoute.index = j;
        minRoute.value = matrix[i][j];
      }
    }
    result.route.push([i, minRoute.index]);
    result.length += minRoute.value;
    i = minRoute.index;
} while (visitedVerteces.length < matrix.length - 1)
      return result;
}

const matrix1 = [
  [0, 1, 19, 96, 69, 112],
  [1, 0, 3, 28, 3, 20],
  [19, 3, 0, 25, 1001, 102],
  [96, 28, 25, 0, 2, 3],
  [69, 3, 1001, 2, 0, 18],
  [112, 20, 102, 3, 18, 0]
];

const matrix2 = [
    [0, 15, 11, 7],
    [15, 0, 2, 4],
    [11, 2, 0, 54],
    [7, 4, 54, 0],
];

const matrix3 = [
  [0, 49, 64],
  [49, 0, 7],
  [64, 7, 0],
];

console.log(greedy(matrix1));
console.log(greedy(matrix2));
console.log(greedy(matrix3));
