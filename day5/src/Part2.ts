import { AdventOfCode } from './AdventOfCode';

export class Part2 extends AdventOfCode {
  private rules: number[][] = [];
  private updates: number[][] = [];
  private invalidUpdates: number[][] = [];
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
  }

  protected solve(): void {
    /**
     * This will get ugly
     */
    this.updates.forEach((update) => {
      for (let i = 0; i < this.rules.length; i++) {
        const [left, right] = this.rules[i];
        const leftMatch = update.indexOf(left);
        const rightMatch = update.indexOf(right);

        if (leftMatch !== -1 && rightMatch !== -1 && leftMatch > rightMatch) {
          this.invalidUpdates.push(update);
          break;
        }
      }
    });

    this.invalidUpdates.forEach((update, key) => {
      update.sort((a, b) => {
        for (let i = 0; i < this.rules.length; i++) {
          const [left, right] = this.rules[i];

          if (a === left && b === right) {
            return -1;
          }
          if (a === right && b === left) {
            return 1;
          }
        }

        return 0;
      });

      this.invalidUpdates[key] = update;
    });

    const score = this.invalidUpdates.reduce((acc, line) => acc + line[Math.floor(line.length / 2)], 0);
    console.log(`Time taken: ${performance.now() - this.perf}ms`);

    this.revealAnswer(score);
  }
}