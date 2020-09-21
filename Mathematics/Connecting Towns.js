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
 * Complete the connectingTowns function below.
 */
function connectingTowns(n, routes) {
   let myTotal=  routes.reduce((total,element)=>BigInt(total)*BigInt(element));
   return myTotal % BigInt(1234567);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const routes = readLine().split(' ').map(routesTemp => parseInt(routesTemp, 10));

        let result = connectingTowns(n, routes);

        ws.write(result + "\n");
    }

    ws.end();
}
