'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function rotateLeft(d,arr){

    let arrayLength=arr.length;
    let copyArray=[...arr];

    arr.forEach((element,index)=>{
        
        let newIndex=index-d>=0?index-d:index-d+arrayLength;
        copyArray[newIndex]=element;
        })
    return copyArray;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = rotateLeft(d, arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
