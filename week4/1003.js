const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

function solution() {
  const dp = Array.from({ length: 40 + 1 }, () => new Array(2).fill(0));
  dp[0][0] = 1;
  dp[1][1] = 1;

  for (let i = 2; i <= 40; i++) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
  }

  for (let testCase = 1; testCase <= T; testCase++) {
    const N = +input.shift();

    console.log(dp[N][0], dp[N][1]);
  }
}

solution();
