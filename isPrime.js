// Write a function `isPrime()`, which return `true` or `false` if number is prime.

//   ```js

const isPrime = num => {

  if (num <= 1) return false;
  if (num === 2) return true;
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
      return true;
    
  }
console.log(isPrime(2591)); // true
console.log(isPrime(291)); // true
