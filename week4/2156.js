const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const amountList = [0, ...input.map(Number)];

function solution() {
  if (n === 1) {
    console.log(amountList[1]);
    return;
  }
  if (n === 2) {
    console.log(amountList[1] + amountList[2]);
    return;
  }

  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = amountList[1];
  dp[2] = amountList[1] + amountList[2];

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
      dp[i - 1], // i번째 잔을 마시지 않았을 때
      dp[i - 2] + amountList[i], // i번째 잔을 마시고 i-1번째 잔을 마시지 않았을 때
      dp[i - 3] + amountList[i - 1] + amountList[i] // i번째 잔과 i-1번째 잔을 마시고 i-2번째 잔은 마시지 않았을 때
    );
  }

  console.log(dp[n]);
}

solution();
