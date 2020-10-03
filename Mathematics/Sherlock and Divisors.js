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
 * Complete the divisors function below.
 */
function divisors(n) {
    
    if(n==1 || n%2!=0) return 0;
    console.log("New Number:",n);
    let nbrOfDivisors=0;
    for(let i=1;i<Math.sqrt(n);i++)
    {   
        if(n%i==0){
            console.log(i,i%2==0,(n/i)%2==0,n/i==i);
            if(i%2==0)
                nbrOfDivisors++;

            if((n/i)%2==0)
                nbrOfDivisors++;
        }
    }

    return Math.sqrt(n)%2==0?nbrOfDivisors+1:nbrOfDivisors;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = divisors(n);

        ws.write(result + "\n");
    }

    ws.end();
}
