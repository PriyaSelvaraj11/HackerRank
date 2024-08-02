// Problem statement:
// https://www.hackerrank.com/challenges/append-and-delete/problem

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

// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
    const sourceArray = s.split('');
    const sLength = sourceArray.length;
    const destinationArray = t.split('');
    const dLength = destinationArray.length;
    if(sLength === 1 && dLength === 1 && k%2 !== 0) {
        return false;
    }
    if(sLength + dLength <= k) {
        return true;
    } 
    let firstCharacterMismatchIndex = -1;
    for (let i=0; i< sourceArray.length; i++) {
        if(sourceArray[i] !== destinationArray[i])
        {
            firstCharacterMismatchIndex = i;
            break;
        }
    }
    let slengthMismatch;
    let dlengthMismatch;
    var length = 0;
    if(firstCharacterMismatchIndex === -1) {
        if(sLength <= dLength) {
            length = dLength - sLength;
        } else {
            length = sLength - dLength;
        }
    } else {
        slengthMismatch = sourceArray.length - firstCharacterMismatchIndex;
        dlengthMismatch = destinationArray.length - firstCharacterMismatchIndex;
        console.log(slengthMismatch);
        console.log(dlengthMismatch);
        length = slengthMismatch + dlengthMismatch;
    }
    let result = false;
    if(length === 0) {
        if(k%2 === 0) {
            return true;
        }
        result = false;
    } else {
        if(k === 1 && length > 1) {
            return false;
        }
        if(length > k) {
            return false;
        }
        if(k%2 != 0 && length%2 != 0) {
            return true;
        } else if(k%2 == 0 && length%2 == 0) {
            return true;
        }
        return false;
    }
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine(), 10);

    let result = (appendAndDelete(s, t, k))?'Yes':'No';

    ws.write(result + "\n");

    ws.end();
}
