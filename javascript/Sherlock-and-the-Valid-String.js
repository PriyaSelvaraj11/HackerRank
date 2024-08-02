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

// Complete the isValid function below.
function isValid(s) {
    const frequencyMap = {};
    let isOneCharTaken = false;
    for(const val in s) {
        if(!frequencyMap[s[val]]) {
            frequencyMap[s[val]] = 1;
        } else {
            frequencyMap[s[val]] += 1;
        }
    }
    let previousElementFreq = null;
    const result = true;
    console.log(frequencyMap);
    for(const index in frequencyMap) {
        if(previousElementFreq) {
            if(previousElementFreq !== frequencyMap[index]) {
                if([1,-1].includes(frequencyMap[index] - previousElementFreq) ||                            frequencyMap[index] === 1) {
                    if(!isOneCharTaken) {
                        isOneCharTaken = true;
                        frequencyMap[index] = previousElementFreq;
                    } else {
                        return 'NO';
                    }
                } else {
                    return 'NO';
                }
            }  
        }
        previousElementFreq = frequencyMap[index];
    }
    return 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
