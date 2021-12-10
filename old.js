// Challenge Morse Code Project

// Create a user interface that allows the user to either input some English text or some Morse Code
// You should also write tests for all of your functions before you begin
// Create JS functions that would allow the user to translate their English text into Morse Code or Morse Code into English text
// Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)
// Don't write tests for DOM interaction
// Due Friday 10th

//dictionary is an object

const onLoad = () => {
    // console.log(document.body.innerHTML);

    console.log("hello there");

    const textInput = document.getElementById("textInput");
    const morseCodeInput = document.getElementById("morseCodeInput");
    document.getElementById("submitButton").onClick = function () {
        console.log("click on button");
        // let text = textInput.innerHTML();
        // console.log(text);
        // let morseCode = morseCodeInput.innerHTML();
        // console.log(morseCode);
        // clearText();
        // result.innerHTML("testing");
    };

    const result = document.getElementById("result");
    // submit.addEventListener("click", (button) => {
    //     console.log("button has been clicked");
    // });

    // const typingHandler = () => {};

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

    function getKeyByValue(object, value) {
        return Object.keys(object).find((key) => object[key] === value);
    }

    const textToMorse = (input) => {
        //convert to array with single letters and empty string for space.
        let arrChar = input.split("");
        //convert characters into morse by matching key to value

        for (let i = 0; i < arrChar.length; i++) {
            let value = arrChar[i];
            console.log(getKeyByValue(dictionary, value));
        }
    };

    const morseCodeToText = (input) => {
        let arrChar = input.split(" ");
        for (let i = 0; i < arrChar.length; i++) {
            let key = arrChar[i];
            // console.log(key);
            console.log(dictionary[key]);
        }
    };

    const clearText = () => {
        textInput.write("");
        morseCodeInput.write("");
    };

    textToMorse("hello string");
    morseCodeToText(".... . .-.. .-.. --- / - .... . .-. .");
};
