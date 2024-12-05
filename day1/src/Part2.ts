import { AdventOfCode } from './AdventOfCode';

export class Part2 extends AdventOfCode {
  frequency = new Map();

  protected solve(): void {
    const perf = performance.now();

    const leftList = [];
    this.input.forEach((line) => {
      const [left, right] = line.match(/\b\d+?\b/g);
      leftList.push(+left);
      this.frequency.set(+right, this.frequency.has(+right) ? this.frequency.get(+right)! + 1 : 1);
    });

    const distance = leftList.reduce((accumulator, currentVal) => {
      const freq = this.frequency.get(currentVal) ?? 0;
      return accumulator + currentVal * freq;
    }, 0);

    this.revealAnswer(distance.toString());
    console.log('Solving took:', performance.now() - perf + 'ms');
  }
}