const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const paper = input.map((row) => row.split(' ').map(Number));

const WHITE = 0;
const BLUE = 1;

let whitePaperCount = 0;
let bluePaperCount = 0;

function solution() {
  getSameColorPaperCount(0, 0, N);

  console.log(whitePaperCount);
  console.log(bluePaperCount);
}

/**
 * 분할 정복을 통해 각각의 색의 종이의 개수를 구하는 함수이다.
 *
 * @param {number} startRow 시작 행
 * @param {number} startCol 시작 열
 * @param {number} length 한 변의 길이
 */
function getSameColorPaperCount(startRow, startCol, length) {
  const baseColor = paper[startRow][startCol];

  if (isAllColorSame(startRow, startCol, length)) {
    if (baseColor === WHITE) {
      whitePaperCount++;
    } else if (baseColor === BLUE) {
      bluePaperCount++;
    }

    return;
  }

  getSameColorPaperCount(startRow, startCol, length / 2);
  getSameColorPaperCount(startRow, startCol + length / 2, length / 2);
  getSameColorPaperCount(startRow + length / 2, startCol, length / 2);
  getSameColorPaperCount(
    startRow + length / 2,
    startCol + length / 2,
    length / 2
  );
}

/**
 * 주어진 범위 내의 색이 모두 같은지 판별하는 함수이다.
 *
 * @param {number} startRow 시작 행
 * @param {number} startCol 시작 열
 * @param {number} length 한 변의 길이
 * @returns 모든 색이 같다면 true, 아니라면 false를 반환한다.
 */
function isAllColorSame(startRow, startCol, length) {
  const baseColor = paper[startRow][startCol];

  for (let i = startRow; i < startRow + length; i++) {
    for (let j = startCol; j < startCol + length; j++) {
      const curColor = paper[i][j];

      if (curColor !== baseColor) {
        return false;
      }
    }
  }

  return true;
}

solution();
