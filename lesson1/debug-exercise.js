function arraySum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    total += numbers[0];
  }
  return total;
}

function sum(a, b) {
  return a + 1;
}

console.log(sum(5, 1)); // 6
console.log(sum(5, 2)); // 7
console.log(sum(13, 3)); // 16

console.log(arraySum([1, 2, 3, 4, 5])); // 15
