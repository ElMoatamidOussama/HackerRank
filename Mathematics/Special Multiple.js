'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function toBinary(number){
    let myNumber=number;
    let myBinaryNumber="";

    while(myNumber!=0){
        myBinaryNumber=myNumber%2+myBinaryNumber;
        myNumber=Math.trunc(myNumber/2);
    }
    return myBinaryNumber;
}

function prepareMyNumber(number){
    return parseInt(toBinary(number).replace(/1/g,"9"));
}

// Complete the solve function below.
function solve(n) {
    let index=1;
    while(true){
        let potentialMultiple=prepareMyNumber(index);
        if(potentialMultiple%n==0) return potentialMultiple;
        index++;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = solve(n);

        ws.write(result + "\n");
    }

    ws.end();
}
