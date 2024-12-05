import { AdventOfCode } from './AdventOfCode';

export class Part1 extends AdventOfCode {
  protected parseInput(): void {

  }

  protected solve(): void {
    let score = 0;
    this.input.forEach(line => {
      const regex = /mul\((\d+),(\d+)\)/g;
      const matches = [...line.matchAll(regex)];

      matches.forEach(match => {
        const [_, a, b] = match;
        score += parseInt(a) * parseInt(b);
      });
    });

    this.revealAnswer(score.toString());
  }
}