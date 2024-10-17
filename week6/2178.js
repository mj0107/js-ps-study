const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const maze = input.map((row) => row.split('').map(Number));

const IMPOSSIBLE = 0;
const POSSIBLE = 1;

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function solution() {
  const count = bfs();

  console.log(count);
}

function bfs() {
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  const queue = [[0, 0, 1]];

  visited[0][0] = true;

  while (queue.length > 0) {
    const [curRow, curCol, curCount] = queue.shift();

    if (curRow === N - 1 && curCol === M - 1) {
      return curCount;
    }

    for (let d = 0; d < 4; d++) {
      const nr = curRow + dr[d];
      const nc = curCol + dc[d];
      const nCount = curCount + 1;

      if (!isValid(nr, nc)) {
        continue;
      }
      if (maze[nr][nc] === IMPOSSIBLE) {
        continue;
      }
      if (visited[nr][nc]) {
        continue;
      }

      visited[nr][nc] = true;
      queue.push([nr, nc, nCount]);
    }
  }
}

function isValid(row, col) {
  return 0 <= row && row < N && 0 <= col && col < M;
}

solution();
