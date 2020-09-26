"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the movingTiles function below.
 */
function movingTiles(l, s1, s2, queries) {
  let myFinalArray = Array(queries.length).fill(null);

  for (let i = 0; i < queries.length; i++) {
    myFinalArray[i] =
      ((l - Math.sqrt(queries[i])) * Math.sqrt(2)) / Math.abs(s2 - s1);
  }

  return myFinalArray;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const lS1S2 = readLine().split(" ");

  const l = parseInt(lS1S2[0], 10);

  const s1 = parseInt(lS1S2[1], 10);

  const s2 = parseInt(lS1S2[2], 10);

  const queriesCount = parseInt(readLine(), 10);

  let queries = [];

  for (let queriesItr = 0; queriesItr < queriesCount; queriesItr++) {
    const queriesItem = parseInt(readLine(), 10);
    queries.push(queriesItem);
  }

  let result = movingTiles(l, s1, s2, queries);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
