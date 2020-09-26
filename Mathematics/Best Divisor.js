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

function sumDigits(number) {
    if (number >= 0 && number <= 9) return number;

    return [...number.toString()].reduce((total, element) => total = parseInt(total) + parseInt(element))
}

function getGreatDivisor(number) {

    if (number == 1) return 1;

    let currentDivisor = 1;
    let bestDivisor = 1;

    while (currentDivisor <= number) {
        if (number % currentDivisor == 0) {
            if (sumDigits(currentDivisor) > sumDigits(bestDivisor)) {
                bestDivisor = currentDivisor;
            } else if (sumDigits(currentDivisor) == sumDigits(bestDivisor)) {
                bestDivisor = bestDivisor < currentDivisor ? bestDivisor : currentDivisor;
            }
        }
        currentDivisor++;
    }
    return bestDivisor;
}


function main() {
    const n = parseInt(readLine(), 10);

    console.log(getGreatDivisor(n));
}