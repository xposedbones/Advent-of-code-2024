import { AdventOfCode } from './AdventOfCode';

export class Part1 extends AdventOfCode {
  private word = 'XMAS';

  protected parseInput(): void {
    this.input = this.input.map((line) => {
      return line.split('');
    })
  }

  protected solve(): void {
    let count = 0;
    for (let i = 0; i < this.input.length; i++) {
      for (let j = 0; j < this.input[i].length; j++) {
        if (this.input[i][j] === this.word[0]) {
          count += this.checkWord(i, j);
        }
      }
    }

    this.revealAnswer(count);
  }

  private checkWord(i: number, j: number): number {
    let word = this.word;
    let matches = 0;
    let directions = [
      [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]
    ];

    for (let d = 0; d < directions.length; d++) {
      let [dx, dy] = directions[d];
      let x = i + dx;
      let y = j + dy;
      let index = 1;
      while (index < word.length) {
        if (x < 0 || x >= this.input.length || y < 0 || y >= this.input[x].length) {
          break;
        }
        if (this.input[x][y] !== word[index]) {
          break;
        }
        x += dx;
        y += dy;
        index++;
      }
      if (index === word.length) {
        matches++;
      }
    }
    return matches;
  }
}