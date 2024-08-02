// Problem statement:
// https://www.hackerrank.com/challenges/counting-valleys/problem

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

function getIntt(val) {
    return val === 'U' ? 1:-1;
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let valleyCount = 0;
    let startsWith = '';
    let count = 0;

    for(let i=0;i< s.length; i++) {
        if(count === 0) {
            startsWith = s.charAt(i);
        }
        const currValue = getIntt(s.charAt(i));
        count = count + currValue; 
        if(count === 0 && startsWith === 'D') {
            valleyCount += 1;
        }
    }
    return valleyCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
