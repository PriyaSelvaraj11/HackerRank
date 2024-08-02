// Problem statement:
// https://www.hackerrank.com/challenges/picking-numbers/problem

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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(arr) {
    // Write your code here
    let countArr = {}; 
    arr.forEach(val => {
        if(countArr[val]) {
            countArr[val] += 1;
        } else {
            countArr[val] = 1;
        }
    });

    let max = 0;
    const val = Object.keys(countArr).sort(
        function(a,b) { return parseInt(a)-parseInt(b);}
    ).forEach(val => {
        const currentMax1 = countArr[val] + (countArr[val+1] || 0);
        const currentMax2 = countArr[val] + (countArr[val-1] || 0);
        const currentMax = currentMax1 > currentMax2 ? currentMax1: currentMax2;

        max = currentMax > max ? currentMax:max;
    });
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
