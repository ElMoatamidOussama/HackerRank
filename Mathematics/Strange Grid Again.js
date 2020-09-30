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

/*
 * Complete the strangeGrid function below.
 */
function strangeGrid(r, c) {
    /*
     * Write your code here.
     */
    let rowNumber=(r-1)%2==0?(r-1)*5:((r-1-1)*5)+1;
    let boxValue=rowNumber+2*(c-1);

    return boxValue;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rc = readLine().split(' ');

    const r = parseInt(rc[0], 10);

    const c = parseInt(rc[1], 10);

    let result = strangeGrid(r, c);

    ws.write(result + "\n");

    ws.end();
}
