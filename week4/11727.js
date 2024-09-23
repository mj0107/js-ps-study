const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();

function solution() {
  const DIVISOR = 10_007;

  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i <= n; i++) {
    // dp[i - 2] : 마지막에 1x2 타일 두개 혹은 2x2 타일 한개를 놓을 경우 각각 2x(i-2)의 타일을 채우는 경우와 같다.
    // dp[i - 1] : 마지막에 2x1 타일 한개를 놓을 경우 2x(i-1)의 타일을 채우는 경우와 같다.
    dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % DIVISOR;
  }

  console.log(dp[n]);
}

solution();
