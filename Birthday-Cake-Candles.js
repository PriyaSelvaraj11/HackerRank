// Problem statement:
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

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

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(arr) {
    let map = {};
    let max = arr[0];
    arr.forEach(val => {
        if(map[val]) {
            map[val] += 1;
        } else {
            map[val] = 1;
        }
        max = (max < val) ? val : max;
    });
    return map[max];

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}
