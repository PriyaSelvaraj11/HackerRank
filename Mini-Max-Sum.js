// Problem statement:
// https://www.hackerrank.com/challenges/mini-max-sum/problem

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    arr.sort();
    const l = arr.length;
    const min = arr[0]+arr[1]+arr[2]+arr[3];
    const max = arr[l-1]+arr[l-2]+arr[l-3]+arr[l-4];
    console.log(min+' '+max);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
