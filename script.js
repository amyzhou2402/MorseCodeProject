const onLoad = () => {
  // console.log("hello there");

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
    //convert to array with single letters and empty string for space.
    let arrChar = input.split("");
    let arrString = [];
    //convert characters into morse by matching key to value

    for (let i = 0; i < arrChar.length; i++) {
      let value = arrChar[i];
      let letters = getKeyByValue(dictionary, value);
      arrString.push(letters);
    }
    console.log(arrString.join(" "));
  };

  const morseCodeToText = (input) => {
    let arrChar = input.split(" ");
    let arrString = [];
    for (let i = 0; i < arrChar.length; i++) {
      let key = arrChar[i];
      let letters = dictionary[key];
      arrString.push(letters);
      // console.log(key);
    }
    console.log(arrString.join(""));
  };

  const clearText = () => {
    textInput.value = "";
    morseCodeInput.value = "";
  };

  // const translate = () => {
  //     if (textInput.value == "" && morseCodeInput.value == "") {
  //         console.log("error, please enter something");
  //     } else if (textInput.value !== "" && morseCodeInput.value !== "") {
  //         console.log("error, please only enter in one input");
  //     } else if (textInput.value !== "") {
  //         console.log(textValue);
  //     } else {
  //         console.log(morseCodeValue);
  //     }
  // };

  // textToMorse("hello string");
  // morseCodeToText(".... . .-.. .-.. --- / - .... . .-. .");

  const translateTextButton = document.getElementById("translateText");
  const translateMorseButton = document.getElementById("translateMorse");
  const textInput = document.getElementById("textInput");
  const textResult = document.getElementById("textResult");
  const morseCodeInput = document.getElementById("morseCodeInput");
  const morseResult = document.getElementById("textResult");

  translateTextButton.addEventListener("click", () => {
    // console.log("translate");
    textToMorse(textInput.value);
    clearText();
  });

  translateMorseButton.addEventListener("click", () => {
    // console.log("translate");
    morseCodeToText(morseCodeInput.value);
    clearText();
  });
};
