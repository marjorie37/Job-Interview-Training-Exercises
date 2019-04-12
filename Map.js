// Write a function `map()`, with 2 arguments (array & callback), which work as function `Array.prototype.map()`, and return result `element * index`

//   ```

let res = [];
function map(array, callback) {
  for (i = 0; i < array.length; i++) {
    res.push(callback(array[i], i));
  }
  return res;
}

console.log(
  map(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    (element, index, array) => element * index
  )
);

// console.log([1,2,3,4,5,6,7,8,9,10].map((elt, i) => elt  *i));
