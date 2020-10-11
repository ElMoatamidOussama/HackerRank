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
const mod= 10**9+7;
function factorial(n){
      if(n <= 1)
        return BigInt(1);
    
       let fact=BigInt(1);
       for(let i=2;i<=n;i++){
           fact*=BigInt(i);
           fact=BigInt(fact)%BigInt(mod)
       }
       return fact;
}
function inverse(a, n) {
    let  res = BigInt(1);
    while(n) {
        if(n % 2 == 1)
            res = (BigInt(res) % BigInt(mod) * BigInt(a) % BigInt(mod)) % BigInt(mod);
        a = (BigInt(a) % BigInt(mod) * a % BigInt(mod)) % BigInt(mod);
        n = Math.trunc(n / 2);
    } 
    return res;
}
// Complete the solve function below.
function solve(n, m) {
    let sumFact=factorial(n-1+m-1);
    let multipleFact=(factorial(n-1))*(factorial(m-1));
    let inversedMultipleFact = inverse(multipleFact, mod - 2);


    return ((sumFact % BigInt(mod)) * (inversedMultipleFact % BigInt(mod))) % BigInt(mod)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nm = readLine().split(' ');

        const n = parseInt(nm[0], 10);

        const m = parseInt(nm[1], 10);

        let result = solve(n, m);

        ws.write(result + "\n");
    }

    ws.end();
}
