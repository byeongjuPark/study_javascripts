let let_first = 10;

{
  console.log(`In let_first ${let_first}`);
  let let_second = 20;
  console.log(`In let_second ${let_second}`);
}
console.log(`Out let_first ${let_first}`);
// console.log(`Out let_second ${let_second}`); //Error

//check typeof
console.log(`typeof let_first : ${typeof let_first}`);
let_first = "good";
console.log(`typeof let_first : ${typeof let_first}`);

let sentance = "5 2 6";
let splits = sentance.split(" ");
console.log(splits);
console.log(typeof splits);
let sumSplits = splits[0] + splits[1] + splits[2];
console.log(sumSplits);
console.log(typeof sumSplits);
let Integer = parseInt(sumSplits);
console.log(Integer);
console.log(typeof Integer);
