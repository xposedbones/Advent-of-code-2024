import { AdventOfCode } from './AdventOfCode';

export class Part1 extends AdventOfCode {
  private rules: number[][] = [];
  private updates: number[][] = [];
  private perf;

  protected parseInput(): void {
    this.perf = performance.now();
    this.input.forEach(line => {
      if (line === '') return;
      if (line.includes('|')) {
        this.rules.push(line.split('|').map(Number));
      } else {
        this.updates.push(line.split(',').map(Number));
      }
    });
    this.rules.sort();
  }

  protected solve(): void {
    const validLines = this.updates.filter((update) => {
      let isValid = true;
      for (let i = 0; i < this.rules.length; i++) {
        const [left, right] = this.rules[i];
        const leftMatch = update.indexOf(left);
        const rightMatch = update.indexOf(right);

        if (leftMatch !== -1 && rightMatch !== -1 && leftMatch > rightMatch) {
          isValid = false;
          break;
        }
      }

      return isValid;
    });

    const score = validLines.reduce((acc, line) => acc + line[Math.floor(line.length / 2)], 0);
    console.log(`Time taken: ${performance.now() - this.perf}ms`);

    this.revealAnswer(score);
  }
}