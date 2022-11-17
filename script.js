const onLoad = () => {

  const dictionary = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "-.-.--": "!",
    ".-.-.-": ".",
    "--..--": ",",
    "/": " ",
  };

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  const textToMorse = (input) => {
    let arrChar = input.split("");
    let arrString = [];

    for (let i = 0; i < arrChar.length; i++) {
      let value = arrChar[i];
      let letters = getKeyByValue(dictionary, value);
      arrString.push(letters);
    }
    return arrString.join(" ");
  };

  const morseCodeToText = (input) => {
    let arrChar = input.split(" ");
    let arrString = [];
    for (let i = 0; i < arrChar.length; i++) {
      let key = arrChar[i];
      let letters = dictionary[key];
      arrString.push(letters);
    }
    return arrString.join("");
  };

  const clearText = () => {
    textInput.value = "";
    morseCodeInput.value = "";
  };

  const translateTextButton = document.getElementById("translateText");
  const translateMorseButton = document.getElementById("translateMorse");
  const textInput = document.getElementById("textInput");
  const textResult = document.getElementById("textResult");
  const morseCodeInput = document.getElementById("morseCodeInput");
  const morseResult = document.getElementById("morseResult");

  translateTextButton.addEventListener("click", () => {
    textResult.value = textToMorse(textInput.value);
    clearText();
  });

  translateMorseButton.addEventListener("click", () => {
    morseResult.value = morseCodeToText(morseCodeInput.value);
    clearText();
  });
};
