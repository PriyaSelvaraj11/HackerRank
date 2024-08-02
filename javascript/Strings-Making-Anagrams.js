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

function getpositive(a) {
    return a < 0 ? -a:a;
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    const obj1 = {};
    const obj2 = {};
    for (let index in a) {
        if(!obj1[a[index]]) { 
            obj1[a[index]] = 1;
        } 
        else {
            obj1[a[index]] += 1;  
        } 
    }
    for (let index in b) {
        if(!obj2[b[index]]) { 
            obj2[b[index]] = 1;
        } 
        else {
            obj2[b[index]] += 1;  
        } 
    }
    let count = 0;
    for (let index in obj1) {
        console.log(index);
        if(!obj2[index]) {
            count = count + obj1[index];
        } else if(obj1[index] !== obj2[index]) {
            count = count + getpositive(obj1[index] - obj2[index]);
        }
        obj2[index] = 0;
    }
    console.log(count);
    console.log(obj2);
    for (let index in obj2) {
        count =  count + obj2[index];
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
