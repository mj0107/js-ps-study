const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

function solution() {
  const result = [];
  for (let testCase = 1; testCase <= T; testCase++) {
    const maxProfit = getMaxProfit();

    result.push(maxProfit);
  }

  console.log(result.join('\n'));
}

/**
 * 최대 이익을 반환하는 함수이다.
 *
 * @returns 최대 이익
 */
function getMaxProfit() {
  const N = +input.shift();
  const priceList = input.shift().split(' ').map(Number);
  let maxPrice = 0;
  let maxProfit = 0;

  for (let i = N - 1; i >= 0; i--) {
    const curPrice = priceList[i];

    if (curPrice > maxPrice) {
      maxPrice = curPrice;
    } else {
      maxProfit += maxPrice - curPrice;
    }
  }

  return maxProfit;
}

solution();
