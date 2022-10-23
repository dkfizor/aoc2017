const { join } = require("path");

const DIRECTIONS = [
  [0, 1], // East
  [-1, 0], // North
  [0, -1], // West
  [1, 0], // South
];

function partOne(data) {
  let memory = new Map();
  let curLocation = [0, 1];
  let curDirection = 0;
  memory.set("0,0", 1);
  memory.set("0,1", 2);
  for (let i = 3; i <= data; i++) {
    let nb = getUsedMemory(memory, curLocation);
    // if (nb === 1) {
    //   curDirection = (curDirection + 1) % 4;
    // }
    // let [x, y] = DIRECTIONS[curDirection];
    let [a, b] = curLocation;
    let newLocation = [curLocation[0] + x, curLocation[1] + y];
    let curLocation = newLocation;
    memory.set(curLocation.join(","), i);
  }
  return memory;
}

function getUsedMemory(memory, location) {
  let used = 0;
  for (let i = 0; i < 4; i++) {
    let [x, y] = DIRECTIONS[i];
    let neighbour = [location[0] + x, location[1] + y].join(",");
    used += memory.has(neighbour) ? 1 : 0;
  }
  return used;
}

let t0 = new Map([
  ["0,0", 1],
  ["0,1", 2],
  ["-1,1", 3],
  //   ['-1,0', 4],
]);

// console.log(t0);

console.log(getUsedMemory(t0, [-1, 0]));
console.log(partOne(6));
