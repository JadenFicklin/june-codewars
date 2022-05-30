// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i] * -1);
  }
  return arr;
}

console.log(invert([1, -2, 3, 4, 5]));
