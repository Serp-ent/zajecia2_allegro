function isOdd(x) {
  return x % 2 == 1;
}

const isEven = (x) => !isOdd(x);

console.log(isEven(1));
