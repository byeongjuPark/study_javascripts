function sumF(parameter) {
  let sum = 0;
  for (let i of parameter) {
    sum += i;
  }
  return sum;
}

let number = [1, 2, 3, 4, 5, 6, 7];
let result = sumF(number);
console.log(result);
