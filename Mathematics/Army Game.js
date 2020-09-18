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
 * Complete the gameWithCells function below.
 */
function gameWithCells(n, m) {
    
    let minRequiredPackages=0;
    let i=0;
    let j=0;
    
    while(i<n){
        j=0;
        while(j<m){
                j=j+1<m?j+2:j+1;
                minRequiredPackages++;
        }
        i=i+1<n?i+2:i+1;
    }

  
    return minRequiredPackages;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let result = gameWithCells(n, m);

    ws.write(result + "\n");

    ws.end();
}
