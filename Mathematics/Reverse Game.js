'use strict';

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


function getPosition(n,k){
    console.log(k <Math.trunc(n/2) ? 2 * k + 1: 2*(n - 1 - k));
}


function main() {
    const t = parseInt(readLine(), 10);

    for(let i=0;i<t;i++){
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        getPosition(n,k);
    }
   
    

}
