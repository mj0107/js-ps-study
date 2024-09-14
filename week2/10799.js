const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const bracketList = input.shift();

const solution = () => {
  const stack = [];

  let count = 0;
  for (let i = 0; i < bracketList.length; i++) {
    const cur = bracketList[i];
    const next = bracketList[i + 1];

    // 레이저인 경우
    if (cur === '(' && next === ')') {
      count += stack.length;
      i++;
      continue;
    }

    if (cur === '(') {
      stack.push(cur);
      count++;
    } else {
      stack.pop();
    }
  }

  console.log(count);
};

solution();
