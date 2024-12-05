import { AdventOfCode } from './AdventOfCode';

export class Part2 extends AdventOfCode {
  private word = 'MAS';

  private perf;

  protected parseInput(): void {
    this.perf = performance.now();
    this.input = this.input.map((line) => {
      return line.split('');
    })
  }

  protected solve(): void {
    let count = 0;
    for (let i = 0; i < this.input.length; i++) {
      for (let j = 0; j < this.input[i].length; j++) {
        if (this.input[i][j] === this.word[1]) {
          count += this.checkWord(i, j);
        }
      }
    }

    this.revealAnswer(count);
    console.log(`Time taken: ${performance.now() - this.perf}ms`);
  }

  private checkWord(x: number, y: number): number {
    let word = this.word;
    const input = this.input;

    let matches = 0;

    if (x - 1 < 0 || x + 1 >= input.length || y - 1 < 0 || y + 1 >= input[x].length) {
      return 0
    }

    if (input[x][y] !== word[1]) {
      return 0
    }

    const diagonal1 = [input[x - 1][y + 1], input[x + 1][y - 1]].filter(Boolean).filter(c => word.includes(c) && c !== word[1]).join('');
    const diagonal2 = [input[x - 1][y - 1], input[x + 1][y + 1]].filter(Boolean).filter(c => word.includes(c) && c !== word[1]).join('');

    if (diagonal1.length != 2 || diagonal2.length != 2) {
      return 0;
    }

    const targetMatches = ['MS', 'SM'];

    if (
      targetMatches.includes(diagonal1) &&
      targetMatches.includes(diagonal2)
    ) {
      matches++;
    }


    return matches;
  }
}