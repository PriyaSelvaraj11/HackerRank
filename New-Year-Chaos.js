// Problem statement:
// https://www.hackerrank.com/challenges/new-year-chaos/problem

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

function max(a,b) {
    return a > b ? a:b;
}
// Complete the minimumBribes function below.
function minimumBribes(q) {
    let count = 0;
    for(let i=0; i< q.length; i++) {
        const index = i + 1;
        if((q[i] - index) > 2) {
            count = -1;
            return 'Too chaotic'
            break; 
        } else {
            for (let j = max(0, q[i] - 2); j < i; j++) {
                if (q[j] > q[i]) count++;   
            }
        }
    }
    return count === -1 ? 'Too chaotic': count;

}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        console.log(minimumBribes(q));
    }
}
