import { logicOne } from "./logic1.js";
import { logicTwo } from "./logic2.js";
import { logicThree } from "./logic3.js";
import { logicFour } from "./logic4.js";
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

let encryptedString = "";

async function calcLogic(rawLetter) {
    // random logic no , then apply that logic, append to global string
    const logic = Math.floor(Math.random() * 4) + 1;

    switch (logic) {
        case 1:
            encryptedString += await logicOne(rawLetter);
            break;
        case 2:
            encryptedString += await logicTwo(rawLetter);
            break;
        case 3:
            encryptedString += await logicThree(rawLetter);
            break;
        case 4:
            encryptedString += await logicFour(rawLetter);
            break;
    }
}

async function intoLetters(rawLine) {
    for (const rawLetter of rawLine) {
        // space between words daalni pdgi yha
        if (rawLetter === " ") {
            encryptedString += String.fromCharCode(10000);
        } else {
            await calcLogic(rawLetter);
        }
    }
    // add krna h string mein unicode for line change ,, for ke bahar
    encryptedString += String.fromCharCode(10001);
}

async function takeLine(lines) {
    let p = document.querySelector('.outputArea1');

    for (const raw_line of lines) {
        if (raw_line.toLowerCase() === "quit") {
            for (const t of encryptedString) {
                p.value = p.value + t;
                await sleep(Math.random() * 300);
            }
            return;
        } else {
            await intoLetters(raw_line);
        }
    }
}


async function getFromTextAreaEncrypt() {

    //disable the run button after it is hit
    let runBtn = document.querySelector('.runEncrypt');
    runBtn.disabled = true;
    runBtn.style.cursor = 'not-allowed';
    //disable copy button after run is hit
    let copyBtn = document.querySelector('#copyEncrypt');
    copyBtn.disabled = true;
    copyBtn.style.cursor = 'not-allowed';

    let plain_text_element = document.querySelector('.inputArea1');
    plain_text_element.readOnly = true;  //make plain_text_element read only, so none can interrupt while encryption is going on


    const plain_text = plain_text_element.value;
    // Empty the input textarea after hitting run
    plain_text_element.value = "";

    if (plain_text.length == 0) {           //ADD CONDITION TO RETURN IN CASE ENTIRE PLAIN TEXT CONSISTS OF SPACES ONLY
        if (document.querySelector('.runBtn1').src.includes("assets/buttons/run_live.webp")) {
            if (document.querySelector('.themeImg').src.includes('assets/buttons/light_mode.webp')) {
                document.querySelector('.runBtn1').src = './assets/buttons/run.webp';
            }
            else {
                document.querySelector('.runBtn1').src = './assets/buttons/run_light.webp';
            }
        }
        //preventing run button to turn live if input is empty

        runBtn.disabled = false;
        runBtn.style.cursor = 'pointer';
        copyBtn.disabled = false;
        copyBtn.style.cursor = 'pointer';
        plain_text_element.readOnly = false;
        return;
    }

    const lines = plain_text.split("\n");   //input string to array of lines
    lines.push("quit"); // quit added as the last line explicitly to mark the end of plain text

    // Adding a delay before the encrypted string starts printing
    // In order to have a gap after clearing the previous encryption
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Code to be executed after the delay
    await takeLine(lines);
    encryptedString = "";       //emptying global encrypted string , for the next encryption

    //re-enabling everything before going back
    runBtn.disabled = false;
    runBtn.style.cursor = 'pointer';
    copyBtn.disabled = false;
    copyBtn.style.cursor = 'pointer';
    plain_text_element.readOnly = false;
    if (document.querySelector('.runBtn1').src.includes("assets/buttons/run_live.webp")) {
        if (document.querySelector('.themeImg').src.includes('assets/buttons/light_mode.webp')) {
            document.querySelector('.runBtn1').src = './assets/buttons/run.webp';
        }
        else {
            document.querySelector('.runBtn1').src = './assets/buttons/run_light.webp';
        }
    }
    // run button to turn non live when done encrypting
}


// function is made globally accessible
window.getFromTextAreaEncrypt = getFromTextAreaEncrypt;
