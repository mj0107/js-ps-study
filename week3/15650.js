const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const sequence = Array.from({ length: M }, () => 0);
const visited = Array.from({ length: N + 1 }, () => false);
const result = [];

function solution() {
  backTrackingWithBitMask(1, 0, 0);
  // backTrackingWithVisitedArray(1, 0);

  console.log(result.join('\n'));
}

/**
 * 비트마스크로 방문처리를 한 백트래킹을 이용해 수열을 구하는 함수이다.
 *
 * @param {number} number 수열에 넣기 시작할 수
 * @param {number} visitedBitMask 방문처리를 할 비트마스크
 * @param {number} count 수열을 이룬 수의 개수
 */
function backTrackingWithBitMask(number, visitedBitMask, count) {
  if (count === M) {
    result.push(sequence.join(' '));
    return;
  }

  for (let i = number; i <= N; i++) {
    if ((visitedBitMask & (1 << i)) === 0) {
      sequence[count] = i;
      backTracking(i + 1, visitedBitMask | (1 << i), count + 1);
    }
  }
}

/**
 * 배열로 방문처리를 한 백트래킹을 이용해 수열을 구하는 함수이다.
 *
 * @param {number} number 수열에 넣기 시작할 수
 * @param {number} count 수열을 이룬 수의 개수
 */
function backTrackingWithVisitedArray(number, count) {
  if (count === M) {
    result.push(sequence.join(' '));
    return;
  }

  for (let i = number; i <= N; i++) {
    if (!visited[number]) {
      sequence[count] = i;
      visited[i] = true;
      backTrackingWithVisitedArray(i + 1, count + 1);
      visited[i] = false;
    }
  }
}

solution();
