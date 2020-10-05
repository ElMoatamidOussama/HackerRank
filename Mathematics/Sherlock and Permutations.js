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
function factorial(n){
    if(n==1 || n==0) return BigInt(1);

    return BigInt(n)*factorial(n-1);
}
// Complete the solve function below.
function solve(n, m) {
    let total=n+m-1;
    return (factorial(total)/(factorial(n)*factorial(m-1)))%(BigInt(10**9)+BigInt(7));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nm = readLine().split(' ');

        const n = parseInt(nm[0], 10);

        const m = parseInt(nm[1], 10);

        let result = solve(n, m);

        ws.write(result + "\n");
    }

    ws.end();
}
