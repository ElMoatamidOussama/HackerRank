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

function checkIfPrimary(number) {

    if (number == 0 || number == 1) return false;

    let myNewNumber = Number(number);

    for (let i = 2; i <= Math.trunc(myNewNumber / 2); i++) {
        if (myNewNumber % i == 0) return false;
    }

    return true;

}
/*
 * Complete the primeCount function below.
 */
function primeCount(n) {

    if (n == 0 || n == 1) return 0;
    if (n == 2) return 1;

    let count = 1;
    let product = BigInt(2);

    for (let j = BigInt(3); product * j <= n; j = j + BigInt(2)) {
        if (checkIfPrimary(j) == true) {
            count++;
            product = product * j;
        }
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = readLine();
        let result = primeCount(BigInt(n));
        ws.write(result + "\n");
    }

    ws.end();
}