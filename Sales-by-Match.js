// Problem statement:
// https://www.hackerrank.com/challenges/sock-merchant/problem

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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    // converting to a map containing count
    const l = ar.length;
    let map = {};
    for(let i=0;i<l;i++) {
        const key = ar[i];
        if(map[key]) {
            map[key] += 1;
        } else {
            map[key] = 1;
        }
    }

    let result = 0;
    const mapp = map;
    Object.values(mapp).forEach(val => {
        result += parseInt(val/2);
    });

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
