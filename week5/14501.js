const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const infoList = input.map((row) => row.split(' ').map(Number));

function solution() {
  const dp = Array.from({ length: N + 1 }, () => 0);

  for (let day = N - 1; day >= 0; day--) {
    const [term, price] = infoList[day];

    // 현재 상담을 진행했을 때 끝나는 날짜가 N일 후를 넘지 않을 경우,
    if (day + term <= N) {
      dp[day] = Math.max(price + dp[day + term], dp[day + 1]);
    } else {
      dp[day] = dp[day + 1];
    }
  }

  console.log(dp[0]);
}

solution();
