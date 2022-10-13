function importFile(filename) {
  const fs = require("fs");
  let dataString = fs.readFileSync(filename, "utf8");
  return dataString;
}

function checksum(data) {
  let clean = 0;
  for (let row of data.split("\n")) {
    let raw = row.split(/\s+/); //split string on whitespace
    let intArray = raw.map((x) => parseInt(x));
    clean += Math.max(...intArray) - Math.min(...intArray);
  }
  return clean;
}

let rawData = importFile("inputs/data1702.txt");
console.log(checksum(rawData));
