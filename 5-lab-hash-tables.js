'use strict';

const array = [30 ,19, 9, 15, 55, 3, 78, 46, 41, 70, 1];

class HashTable {
  constructor() {
    this.keys = [];
    this.values = [];
    this.collisions = 0;
  }
  get(key) {
    return this.values[this.keys.indexOf(key)];
  }
    
  push(a, b) {
    if(this.keys.includes(a + b)) {
      let temp = this.values[this.keys.indexOf(a + b)];
      this.values[this.keys.indexOf(a + b)] = [temp, [a, b]];
      this.collisions++;
    } else {
      this.keys.push(a + b);
      this.values.push([a, b]);
    }
  }              
}

const hashtable = new HashTable();

for(let i = 0; i < array.length; i++) {
  for(let j = i + 1; j < array.length; j++) {
    hashtable.push(array[i], array[j]);
  }
}

console.dir(hashtable.values);
console.log('Count of collisons: ' + hashtable.collisions);



class HashTable1 {
  constructor() {
    this.keys = [];
    this.values = [];
    this.collisions = 0;
  }
  get(key) {
    return this.values[this.keys.indexOf(key)];
  }
    
  push(a, b, key) {
    if(this.keys.includes(key)) {
      this.collisions++;
      this.push(a, b, key + 1);
    } else {
      this.keys.push(key);
      this.values.push([a, b]);
    }
  }              
}

const hashtable1 = new HashTable1();

for(let i = 0; i < array.length; i++) {
  for(let j = i + 1; j < array.length; j++) {
    hashtable1.push(array[i], array[j], array[i] + array[j]);
  }
}

console.dir(hashtable1.values);
console.log('Count of collisons: ' + hashtable1.collisions);
console.log('Value of key 119 is ');
console.log(hashtable1.get(119));
