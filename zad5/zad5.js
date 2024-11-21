function fibonacci(n) {
  if ([0, 1].includes(n)) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

console.log(fibonacci(9));