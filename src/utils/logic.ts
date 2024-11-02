import { Symbols } from "./RusEngLetters";

export const translateText = () => {
  const targetBox = document.querySelector<HTMLTextAreaElement>('.boxTranslate')!;
  const targetBtn = document.querySelector<HTMLButtonElement>('.btnTranslate')!;
  const resultBox = document.querySelector<HTMLParagraphElement>('.placeForTranslate')!;

  const handleClickTranslate = () => {
    const inputText = targetBox.value.trim();
    if (inputText.length === 0) {
      resultBox.textContent = 'Текст для перевода отсутствует. Введите текст!';
      return;
    }

    const resStr = inputText
      .toUpperCase()
      .split('')
      .map(char => Symbols[char as keyof typeof Symbols] || char)
      .join('')
      .toLowerCase();

    resultBox.textContent = resStr;
  }

  targetBtn.addEventListener('click', handleClickTranslate);
};
