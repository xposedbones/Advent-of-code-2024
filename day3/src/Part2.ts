import { AdventOfCode } from './AdventOfCode';

export class Part2 extends AdventOfCode {
  protected parseInput(): void {
    this.input = this.input.join('\n');
  }

  protected solve(): void {
    const regex = /(?<=(^|do\(\))(.(?!don't\(\)))*)mul\((\d+),(\d+)\)/gs;
    const matches = [...this.input.matchAll(regex)];
    const score = matches.reduce((acc, [, , , b, c]) => acc + parseInt(b) * parseInt(c), 0);

    this.revealAnswer(score.toString());
  }
}