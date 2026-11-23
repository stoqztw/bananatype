import { AppError } from "../errors/app-error";
import { isString } from "../utils/is-string";
import { removeCharacters } from "../utils/remove-characters";

export class TypingEngine {
  constructor(text, usedPunctuationMarks = true) {
    if (!isString(text)) {
      const appError = new AppError(
        "Failed to load text for test. Check your internet connection and refresh the page.",
        "Invalid data type, it must be a string",
      );

      throw appError;
    }

    this.usedPunctuationMarks = usedPunctuationMarks;
    this.text = removeCharacters(text, this.usedPunctuationMarks);
    this.index = 0;
  }

  getCharactersList() {
    const characterList = this.text.split("");

    return characterList;
  }

  getWordsList() {
    const wordsList = removeCharacters(this.text, false).split(" ");

    return wordsList;
  }

  checkCharacter(character) {
    if (!isString(character)) {
      return;
    }

    return;
  }
}
