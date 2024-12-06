import './style.css';

export class AdventOfCode {
  input: any;
  answerElement: HTMLElement;

  constructor() {
    this.answerElement = document.querySelector('[answer]');
    this.answerElement.addEventListener('click', this.onAnswerClick.bind(this));

    this.getInput().then(() => {
      this.parseInput();
      this.solve();
    });
  }

  private getInput(): Promise<any> {
    return fetch('input.txt')
      .then((response) => response.text())
      .then((data) => {
        this.input = data.split('\n');
      });
  }

  private onAnswerClick(): void {
    // Copy the answer to the clipboard
    navigator.clipboard.writeText(this.answerElement.innerHTML);
  }

  protected parseInput(): void { }

  protected solve(): void { }

  public revealAnswer(value: number): void {
    const holder = document.querySelector('[answer]');
    holder.innerHTML = value.toString();
  }
}

new AdventOfCode();