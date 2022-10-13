function importFile(filename) {
  const fs = require("fs");

  let data = fs.readFileSync(filename, "utf8");
  let rawInputs = data.split("");
  let inputs = rawInputs.map((input) => parseInt(input));
  return inputs;
}

function partOne(input, halfway = false) {
  let step = halfway ? input.length / 2 : 1;
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    let left = input[i];
    let right = input[(i + step) % input.length];
    if (left === right) {
      result += left;
    }
  }
  return result;
}

let p1 = importFile("inputs/data1701.txt");

console.assert(partOne([1, 1, 2, 2]) === 3);
console.assert(partOne([1, 1, 1, 1]) === 4);
console.assert(partOne([1, 2, 3, 4]) === 0);
console.assert(partOne([9, 1, 2, 1, 2, 1, 2, 9]) === 9);
console.log("p1 =", partOne(p1));

console.assert(partOne([1, 2, 1, 2], true) === 6);
console.assert(partOne([1, 2, 2, 1], true) === 0);
console.assert(partOne([1, 2, 3, 4, 2, 5], true) === 4);
console.assert(partOne([1, 2, 3, 1, 2, 3], true) === 12);
console.assert(partOne([1, 2, 1, 3, 1, 4, 1, 5], true) === 4);
console.log("p2 =", partOne(p1, true));
