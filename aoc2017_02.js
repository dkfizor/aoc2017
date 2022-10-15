function importFile(filename) {
  const fs = require("fs");
  let dataString = fs.readFileSync(filename, "utf8");
  return dataString;
}

function parseData(rawData) {
  let clean = [];
  for (let row of rawData.split("\n")) {
    let raw = row.split(/\s+/); //split string on whitespace
    clean.push(raw.map((x) => parseInt(x)));
  }
  return clean;
}

function checksum(data) {
  let clean = 0;
  for (let row of data) {
    clean += Math.max(...row) - Math.min(...row);
  }
  return clean;
}

function evenDivision(data) {
  let clean = 0;
  for (let row of data) {
    row.sort((a, b) => b - a);
    for (let i = 0; i < row.length; i++) {
      for (let j = i + 1; j < row.length; j++) {
        let division = row[i] / row[j];
        if (division % 1 === 0) {
          clean += division;
          i = j = row.length; // breaks out of loops if result found
        }
      }
    }
  }
  return clean;
}

let rawData = importFile("inputs/data1702.txt");
let data = parseData(rawData);

console.log("p1 =", checksum(data));

console.log("p2 =", evenDivision(data));
