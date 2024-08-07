// Problem Statement
// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jumpCount = 0;
    const l = c.length;

    for(let i=0;i<l;) {
        if(c[i+2] === 0) {
            jumpCount += 1;
            i=i+2;
        } else if(c[i+1] === 0){
            jumpCount += 1;
            i=i+1;
        } else {
            i=i+1;
        }
    }

    return jumpCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
