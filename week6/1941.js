const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const seatingChart = input.map((row) => [...row.trim()]);

let result = 0;

function solution() {
  backTracking(0, 0, 0, 0, []);
  console.log(result);
}

/**
 * 백트래킹을 이용해 가능한 조합을 찾는 함수이다.
 *
 * @param {number} index 현재 인덱스
 * @param {number} countY 임도연파 학생 수
 * @param {number} countS 이다솜파 학생 수
 * @param {number} countTotal 선택한 총 학생 수
 * @param {number[][]} selected 선택한 학생의 [행, 열] 배열
 */
function backTracking(index, countY, countS, countTotal, selected) {
  // 임도연파가 과반수 일경우 return 한다.
  if (countY > 3) {
    return;
  }

  // 만약 7명을 모두 골랐다면,
  if (countTotal === 7) {
    // 이다솜파가 임도연파 보다 많고, 모두 연결되어 있다면 결과값을 하나 더한다.
    if (countS > countY && isConnected(selected)) {
      result++;
    }
    return;
  }

  // 인덱스를 벗어날 경우 return 한다.
  if (index >= 25) {
    return;
  }

  const row = Math.floor(index / 5);
  const col = index % 5;

  selected.push([row, col]);
  // 현재 행과 열이 이다솜파인지 임도연파인지에 따라 분기처리하여 다음 재귀로 넘어간다.
  seatingChart[row][col] === 'Y'
    ? backTracking(index + 1, countY + 1, countS, countTotal + 1, selected)
    : backTracking(index + 1, countY, countS + 1, countTotal + 1, selected);
  selected.pop();

  // 현재 행과 열을 선택하지 않을 경우의 수도 고려하여 다음 재귀로 넘어간다.
  backTracking(index + 1, countY, countS, countTotal, selected);
}

/**
 * [행, 열] 배열의 위치가 모두 이어져 있는지 확인하는 함수이다.
 *
 * @param {number[][]} selected 선택한 [행, 열] 배열
 * @returns 모두 이어져 있으면 true, 아니라면 false를 반환한다.
 */
function isConnected(selected) {
  const visited = Array.from({ length: 7 }, () => false);
  const queue = [0];

  visited[0] = true;

  let count = 1;

  while (queue.length > 0) {
    const cur = queue.shift();
    const [row, col] = selected[cur];

    for (let i = 0; i < 7; i++) {
      if (visited[i]) {
        continue;
      }

      const [nr, nc] = selected[i];

      // 만약 queue에서 뽑은 위치와 인접한 위치일경우 방문처리하고 queue에 넣는다.
      if (isAdjacent(row, col, nr, nc)) {
        visited[i] = true;
        queue.push(i);
        count++;
      }
    }
  }

  return count === 7;
}

/**
 * 선택한 두 (행, 열) 쌍이 인접해 있는지 판단하는 함수이다.
 *
 * @param {number} r1 행1
 * @param {number} c1 열1
 * @param {number} r2 행2
 * @param {number} c2 열2
 * @returns 인접해 있다면 true, 아니라면 false를 반환한다.
 */
function isAdjacent(r1, c1, r2, c2) {
  return Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1;
}

solution();
