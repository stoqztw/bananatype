export class TypingRender {
  constructor(characterList, container) {
    this.characterList = characterList;
    this.container = document.querySelector(container);
  }

  render() {
    this.container.innerHTML = "";

    this.characterList.forEach((character) => {
      this.container.innerHTML += `<span>${character}</span>`;
    });
  }
}
