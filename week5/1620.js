const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const pokemonList = input.slice(0, N).map((el) => el.trim());
const questionList = input.slice(-M).map((el) => el.trim());

function solution() {
  const result = [];
  const map = new Map();

  for (let i = 0; i < N; i++) {
    map.set(pokemonList[i], i + 1);
  }

  for (const question of questionList) {
    if (!isNaN(question)) {
      result.push(pokemonList[question - 1]);
    } else {
      result.push(map.get(question));
    }
  }

  console.log(result.join('\n'));
}

solution();
