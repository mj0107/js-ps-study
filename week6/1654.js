const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [K, N] = input.shift().split(' ').map(Number);
const lengthList = input.map(Number);

function solution() {
  const result = binarySearch();

  console.log(result);
}

function binarySearch() {
  let left = 0;
  let right = Math.max(...lengthList);

  let result = -Infinity;
  while (left <= right) {
    const length = Math.floor((left + right) / 2);
    const wireCount = getWireCount(length);

    if (wireCount < N) {
      right = length - 1;
    } else {
      result = Math.max(result, length);
      left = length + 1;
    }
  }

  return result;
}

function getWireCount(length) {
  return lengthList.reduce((acc, cur) => acc + Math.floor(cur / length), 0);
}

solution();
