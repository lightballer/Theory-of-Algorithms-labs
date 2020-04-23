'use strict';

const items = [
  {value: 24, weight: 3},
  {value: 12, weight: 5},
  {value: 68, weight: 7},
  {value: 43, weight: 9},
  {value: 32, weight: 4},
];

const backpackVolume = 16;

const knapsack = (items, capacity) => {
  let totalValue = 0;
  let totalWeight = 0;
  const suitables = [];
  let remainingItems = items.sort((a,b) => {
    return (b.value / b.weight) - (a.value / a.weight);
});
  while (remainingItems.length > 0) {
    const remainingCapacity = capacity - totalWeight;
    remainingItems = remainingItems.filter((item) => {
      return (item.weight <= remainingCapacity);
    });
    if(remainingItems.length === 0) continue;
    const addedItem = remainingItems.shift();
    suitables.push(addedItem);
    totalValue += addedItem.value;
    totalWeight += addedItem.weight;
  }
  console.log('Suitable items:');
  suitables.forEach(item => {
    console.log('Value ' + item.value, 'Weight ' + item.weight)
  });
  console.log('Total value: ' + totalValue);
}

knapsack(items, backpackVolume);

