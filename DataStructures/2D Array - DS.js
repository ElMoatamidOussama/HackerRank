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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function calculateHourglassSum(arr, i, j) {
    let sum = 0;
    for (let k = i; k <= i + 2; k++)
        for (let m = j; m <= j + 2; m++)
            sum += arr[k][m];

    return sum - arr[i + 1][j] - arr[i + 1][j + 2];

}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let maxSum = calculateHourglassSum(arr, 0, 0);
    let sum = 0;
    for (let i = 0; i < arr.length - 2; i++)
        for (let j = 0; j < arr[i].length - 2; j++) {
            sum = calculateHourglassSum(arr, i, j);
            maxSum = sum > maxSum ? sum : maxSum;
        }
    return maxSum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}