const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const havingNumberSet = new Set(input.shift().split(' ').map(Number));
const M = +input.shift();
const numberList = input.shift().split(' ').map(Number);

function solution() {
  const result = [];

  for (const number of numberList) {
    if (havingNumberSet.has(number)) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  console.log(result.join(' '));
}

solution();
