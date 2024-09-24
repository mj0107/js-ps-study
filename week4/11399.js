const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const P = input.shift().split(' ').map(Number);

function solution() {
  const sortedP = [...P].sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < N; i++) {
    result += sortedP[i] * (N - i);
  }

  console.log(result);
}

solution();
