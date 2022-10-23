function getData(filename) {
  const fs = require("fs");
  let dataString = fs.readFileSync(filename, "utf8");
  let data = dataString.split("\n");
  return data.map((item) => parseInt(item));
}

const jumper = (instructions) => {
  let position = 0;
  let steps = 0;
  let exit = instructions.length - 1;
  while (true) {
    steps += 1;
    let jump = instructions[position];
    instructions[position] += 1;
    position += jump;
    if (position < 0 || position > exit) {
      return steps;
    }
  }
};

let t1 = [0, 3, 0, 1, -3];
console.log(jumper(t1));

let data = getData("inputs/data1705.txt");
console.log(jumper(data));
