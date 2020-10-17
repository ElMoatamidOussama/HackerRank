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
function gcd(a, b)
{
    let temp;
    while(a%b!=0)
    {
        temp=a%b;
        a=b;
        b=temp;
    }
    return b;
}
// Complete the solve function below.
function solve(a, b, c) {
    return c<=Math.max(a,b) && c%gcd(a,b)==0?"YES":"NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const abc = readLine().split(' ');

        const a = parseInt(abc[0], 10);

        const b = parseInt(abc[1], 10);

        const c = parseInt(abc[2], 10);

        let result = solve(a, b, c);

        ws.write(result + "\n");
    }

    ws.end();
}
