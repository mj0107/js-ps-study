const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);

const solution = () => {
  const queue = Array.from({ length: N }, (_, idx) => idx + 1);
  const result = [];

  let curIndex = K - 1;
  while (queue.length) {
    curIndex = curIndex % queue.length;
    result.push(...queue.splice(curIndex, 1));
    curIndex += K - 1;
  }

  console.log(`<${result.join(', ')}>`);
};

solution();
