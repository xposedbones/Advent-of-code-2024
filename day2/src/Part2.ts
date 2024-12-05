import { AdventOfCode } from './AdventOfCode';

export class Part2 extends AdventOfCode {
  protected parseInput(): void {
    this.input = this.input.map(line => line.match(/\d+/g).map(Number));
  }

  protected solve(): void {
    const valid = this.input.filter(line => !this.isValid(line, 1)).length;
    this.revealAnswer(valid.toString());
  }

  private isValid(line: number[], tolerance: number): boolean {
    for (let i = 1; i < line.length; i++) {
      const diff = line[i] - line[i - 1];

      if (Math.abs(diff) > 3 || (line[i - 1] - line[i - 2]) * diff <= 0) {
        return !tolerance || [i - 2, i - 1, i].every(j => this.isValid(line.toSpliced(j, 1), tolerance - 1));
      }
    }
  }
}