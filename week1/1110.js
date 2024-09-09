/** 더하기 사이클 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

const solution = () => {
  let cur = N;
  let count = 0;

  while (count === 0 || cur !== N) {
    cur = (cur % 10) * 10 + ((Math.floor(cur / 10) + (cur % 10)) % 10);
    count++;
  }

  console.log(count);
};

solution();
