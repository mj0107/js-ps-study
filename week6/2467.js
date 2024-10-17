const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const valueList = input.shift().split(' ').map(Number);

function solution() {
  let result = [];
  let [p1, p2] = [0, N - 1];
  let minDiff = Infinity;

  while (p1 < p2) {
    const [value1, value2] = [valueList[p1], valueList[p2]];
    const sum = value1 + value2;
    const diff = Math.abs(sum);

    if (diff < minDiff) {
      minDiff = diff;
      result = [value1, value2];
    }

    if (sum < 0) {
      p1++;
    } else if (sum === 0) {
      break;
    } else if (sum > 0) {
      p2--;
    }
  }

  console.log(result.sort((a, b) => a - b).join(' '));
}

solution();
