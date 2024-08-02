// Problem statement:
// https://www.hackerrank.com/challenges/repeated-string/problem

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

// Complete the repeatedString function below.
function repeatedString(s, n) {
    let aCount = s.split('').filter(val => val === 'a').length;
    let stringLength = s.length;

    let lastPartACount = n%stringLength && s.substring(0, n%stringLength).split('').filter(val => val === 'a').length;
    const result = parseInt(n/stringLength)*aCount + (lastPartACount || 0);
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
