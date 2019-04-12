// Write a function `factorial()`, which return factorial of the number passed to it.

//   ```js

let res = 0;
let tab = [];
factorial = num => {
for(i=1; i<= num; i++){
tab.push(i)
}
return tab.reduce((acc, curr) => acc  * curr )
}

factorial(4); // 24
factorial(8); // 24

console.log(factorial(7));