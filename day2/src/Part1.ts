import { AdventOfCode } from './AdventOfCode';

export class Part1 extends AdventOfCode {
  protected parseInput(): void {
    this.input = this.input.map(line => line.split(' ').map(Number));
  }

  protected solve(): void {
    let valid = 0;

    this.input.forEach(line => {
      for (let i = 0; i < line.length; i++) {
        if (this.isValid(line)) {
          valid++;
          break;
        }
      }
    });

    this.revealAnswer(valid.toString());
  }

  private isValid(line: number[]): boolean {
    let initialMode = line[0] > line[1] ? 'desc' : 'asc';
    for (let i = 0; i < line.length; i++) {
      const currentMode = line[i] > line[i + 1] ? 'desc' : 'asc';
      if (line[i + 1] === undefined) {
        break;
      }

      if (initialMode !== currentMode) {
        return false;
      }

      const diff = Math.abs(line[i] - line[i + 1]);
      if (diff < 1 || diff > 3) {
        return false;
      }


    }

    return true;
  }
}