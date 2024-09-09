/** 균형잡힌 세상 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const isBracket = (ch) => {
    return ch === '(' || ch === ')' || ch === '[' || ch === ']';
  };

  const isBalanced = (str) => {
    const bracketStack = [];

    for (const ch of str) {
      if (!isBracket(ch)) {
        continue;
      }

      if (ch === '(' || ch === '[') {
        bracketStack.push(ch);
      } else {
        if (bracketStack.length === 0) {
          return 'no';
        }
        if (ch === ')' && bracketStack.at(-1) !== '(') {
          return 'no';
        }
        if (ch === ']' && bracketStack.at(-1) !== '[') {
          return 'no';
        }

        bracketStack.pop();
      }
    }

    return bracketStack.length === 0 ? 'yes' : 'no';
  };

  input.pop();
  const result = input.map((row) => isBalanced(row));

  console.log(result.join('\n'));
};

solution();
