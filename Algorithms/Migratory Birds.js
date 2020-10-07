"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  let myIndexOccurences = Array(6).fill(0);
  arr.forEach((element) => {
    myIndexOccurences[element]++;
  });

  let maxIndex = 1;
  let maxIndexOcc = myIndexOccurences[1];

  myIndexOccurences.forEach((indexOcc, index) => {
    if (indexOcc > maxIndexOcc) {
      maxIndex = index;
      maxIndexOcc = indexOcc;
    }
  });

  return maxIndex;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
