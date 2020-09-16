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

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {

    let queriesNumber=queries.length;
    let lastAnswer=0;
    let finalArray=[];

    let mySeqArray=[];
    for (let i=0;i<n;i++) mySeqArray.push([]);

    for(let j=0;j<queriesNumber;j++){

        let x=queries[j][1];
        let y=queries[j][2];
        let xIndex=(x^lastAnswer)%n;

        let currentSequence=mySeqArray[xIndex];

        if(queries[j][0]==1){
           currentSequence.push(queries[j][2]);
        }else if(queries[j][0]==2){
            let size=currentSequence.length;
            let yIndex=y%size;
            lastAnswer=currentSequence[yIndex];
            finalArray.push(lastAnswer);
        }
    }

    
    return finalArray;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
