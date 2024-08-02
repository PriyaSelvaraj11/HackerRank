// Problem statement:
// https://www.hackerrank.com/challenges/compare-the-triplets/problem

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

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    const l = a.length;
    let bob = 0;
    let alice = 0;
    for(let i=0;i<l;i++){
        const val1= a[i];
        const val2 = b[i];

        if(val1 < val2) {
            bob += 1;
        } else if(val1 > val2) {
            alice += 1;
        }
    }
    return [alice, bob];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
