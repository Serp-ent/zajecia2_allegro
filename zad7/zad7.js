function isHappyNumber(n) {
  let result = n;
  const numbers = [];
  numbers.push(result);
  while (result != 1) {
    let arr = result.toString().split("");
    result = 0;
    arr.forEach((x) => (result += x * x));

    if (numbers.includes(result)) {
        return false;
    }
    numbers.push(result);
  }

  return true;
}

console.log(isHappyNumber(19));
console.log(isHappyNumber(18));
