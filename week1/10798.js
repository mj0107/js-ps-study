/** 세로읽기 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const board = input.map((row) => row.trim().split(''));

const rowCount = 5;
const colCount = 15;

const solution = () => {
  const result = [];

  for (let j = 0; j < colCount; j++) {
    for (let i = 0; i < rowCount; i++) {
      if (board[i][j]) {
        result.push(board[i][j]);
      }
    }
  }

  console.log(result.join(''));
};

solution();
