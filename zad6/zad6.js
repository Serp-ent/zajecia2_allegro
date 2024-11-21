function palindrom(str) {
  return str.split('').reverse().join('') === str;
}

console.log(palindrom("kajak"));
console.log(palindrom("kaja"));
