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
 * Complete the restaurant function below.
 */
function restaurant(l, b) {
    
    if(b%l==0) return b/l;

    let maxSizeSquare=1;

    for(let i=2;i<l;i++){
        if(b%i==0 && l%i==0)
            maxSizeSquare=(b/i) *(l/i);
    }

    if(maxSizeSquare==1) return b*l;

    return maxSizeSquare;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const lb = readLine().split(' ');

        const l = parseInt(lb[0], 10);

        const b = parseInt(lb[1], 10);

        let result = restaurant(l, b);

        ws.write(result + "\n");
    }

    ws.end();
}
