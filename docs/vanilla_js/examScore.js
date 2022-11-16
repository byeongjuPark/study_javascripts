const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

if (inputs[0] < 60) {
  console.log("F");
} else if (inputs[0] < 70) {
  console.log("D");
} else if (inputs[0] < 80) {
  console.log("C");
} else if (inputs[0] < 90) {
  console.log("B");
} else {
  console.log("A");
}
