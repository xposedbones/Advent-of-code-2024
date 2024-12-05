import { AdventOfCode } from './AdventOfCode';

export class Part1 extends AdventOfCode {
  protected parseInput(): void {
    const leftArray = [];
    const rightArray = [];

    this.input.forEach((element: string) => {
      const [left, right] = element.split('   ');
      leftArray.push(+left);
      rightArray.push(+right);
    });

    this.input = [leftArray, rightArray];
  }

  protected solve(): void {
    let distance = 0;
    const [left, right] = this.input;
    left.sort();
    right.sort();

    left.forEach((value, i) => {
      distance += Math.abs(value - right[i]);
    });

    this.revealAnswer(distance.toString());
  }
}