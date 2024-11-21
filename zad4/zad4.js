const sum = (numbers) => {
    return numbers.reduce((sum, val) => sum + val, 0);
}

console.log(sum([1,2,3,4,5]));
console.log(sum([3,7,5]));