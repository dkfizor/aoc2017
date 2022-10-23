function importFile(filename) {
  const fs = require("fs");
  let dataString = fs.readFileSync(filename, "utf8");
  return dataString.split("\n");
}

function countValid(passPhrases, validator) {
  let valid = 0;
  for (let phrase of passPhrases) {
    valid += validator(phrase);
  }
  return valid;
}

function containsDuplicates(phrase) {
  // TODO: make function more efficient by returning 0 as soon as dupe is found.
  let words = phrase.split(" ");
  let unique = new Set(words);
  return words.length === unique.size ? 1 : 0;
}

function containsAnagrams(phrase) {
  // TODO: make function more efficient by returning 0 as soon as anagram is found.
  let anagrams = new Set();
  let words = phrase.split(" ");
  for (let word of words) {
    let sortedWord = word.split("").sort().join();
    anagrams.add(sortedWord);
  }
  return words.length === anagrams.size ? 1 : 0;
}

console.assert(containsDuplicates("aa bb cc dd ee") === 1);
console.assert(containsDuplicates("aa bb cc dd aa") === 0);
console.assert(containsDuplicates("aa bb cc dd aaa") === 1);

console.assert(containsAnagrams("abcde fghij") === 1);
console.assert(containsAnagrams("abcde xyz ecdab") === 0);
console.assert(containsAnagrams("a ab abc abd abf abj") === 1);
console.assert(containsAnagrams("iiii oiii ooii oooi oooo") === 1);
console.assert(containsAnagrams("oiii ioii iioi iiio") === 0);

let data = importFile("inputs/data1704.txt");
console.log("p1 =", countValid(data, containsDuplicates));
console.log("p2 =", countValid(data, containsAnagrams));
