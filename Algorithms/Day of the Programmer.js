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

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {

    let index=1;
    let nbrOfDays=0;

    for(index=1;index<=12 && nbrOfDays+new Date(year, index,0).getDate()<256;index++){
        if(index==2 && year<=1917)
            nbrOfDays+=year%4==0?29:28;
        else if(index==2 && year==1918)
            nbrOfDays+=15;//28-14+1
        else  
            nbrOfDays+=new Date(year,index,0).getDate();
    }

    let day=256-nbrOfDays<10?"0"+256-nbrOfDays:256-nbrOfDays;
    let month=index<10?"0"+index:index;

    return `${day}.${month}.${year}`;
}  

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
