// Problem statement:
// https://www.hackerrank.com/challenges/minimum-swaps-2/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let count = 0;
    var objMap = {}
    arr.forEach((val,index) => {
        const newObj = {};
        newObj[val] = index;
        Object.assign(objMap, newObj);
    });
    console.log(objMap);
    arr.forEach((val,index) => {
        if(val != index+1) {
            const indexOfVal = objMap[index+1];
            arr[index] = index+1;
            arr[indexOfVal] = val;
            objMap[index+1] = index;
            objMap[val] = indexOfVal; 
            count += 1;
        }
    });
    if(count === 0)
    {
        return 0;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
