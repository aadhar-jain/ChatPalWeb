import { logic1 } from "./logic1.js";
import { logic2 } from "./logic2.js";
import { logic3 } from "./logic3.js";
import { logic4 } from "./logic4.js";

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

let flag = 1;
let temp = "";
let count = 1;
let decryptedString = "";

async function intoLetters(rawString) {
    for (const rawLetter of rawString) {
        if (rawLetter === String.fromCharCode(10000)) {
            if (flag === 1) {
                // do nothing
            } else {
                decryptedString += " ";
            }
        } else if (rawLetter === String.fromCharCode(10001)) {
            // add line to the outputTextArea
            let p = document.querySelector('.outputArea2');

            for (const char of decryptedString) {
                p.value = p.value + char;
                await sleep(Math.random() * 300);
            }
            p.value = p.value + "\n";
            decryptedString = "";
        } else {
            flag = 0;
            count++;

            if (count % 2 === 0) {
                temp = rawLetter;
            } else if (rawLetter === '#') {
                decryptedString += await logic1(temp);
            } else if (rawLetter === '$') {
                decryptedString += await logic2(temp);
            } else if (rawLetter === '%') {
                decryptedString += await logic3(temp);
            } else if (rawLetter === '&') {
                decryptedString += await logic4(temp);
            }
        }
    }
}

async function getFromTextAreaDecrypt() {

    //disable the run button after it is hit
    let runBtn = document.querySelector('.runDecrypt');
    runBtn.disabled = true;
    runBtn.style.cursor = 'not-allowed';

    //disable copy button after run is hit
    let copyBtn = document.querySelector('#copyDecrypt');
    copyBtn.disabled = true;
    copyBtn.style.cursor = 'not-allowed';

    let cipher_text_element = document.querySelector('.inputArea2');
    cipher_text_element.readOnly = true;  //make cipher_text_element read only, so none can interrupt while encryption is going on


    const cipher_text = cipher_text_element.value;
    // Empty the input textarea after hitting run
    cipher_text_element.value = "";

    if (cipher_text.length == 0) {           //ADD CONDITION TO RETURN IN CASE ENTIRE PLAIN TEXT CONSISTS OF SPACES ONLY
        if (document.querySelector('.runBtn2').src.includes("assets/buttons/run_live.webp")) {
            if(document.querySelector('.themeImg').src.includes('assets/buttons/light_mode.webp'))
            {
                document.querySelector('.runBtn2').src = './assets/buttons/run.webp';
            }
            else
            {
                document.querySelector('.runBtn2').src = './assets/buttons/run_light.webp';
            }
        }
        //preventing run button to turn live if input is empty
        runBtn.disabled = false;
        runBtn.style.cursor = 'pointer';
        copyBtn.disabled = false;
        copyBtn.style.cursor = 'pointer';
        cipher_text_element.readOnly = false;
        return;
    }

    // Adding a delay before the decrypted string starts printing
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Code to be executed after the delay
    await intoLetters(cipher_text);
    decryptedString = "";       //emptying global decrypted string , for the next encryption

    //re-enabling everything before going back
    runBtn.disabled = false;
    runBtn.style.cursor = 'pointer';
    copyBtn.disabled = false;
    copyBtn.style.cursor = 'pointer';
    cipher_text_element.readOnly = false;

    if (document.querySelector('.runBtn2').src.includes("assets/buttons/run_live.webp")) {
        if(document.querySelector('.themeImg').src.includes('assets/buttons/light_mode.webp'))
        {
            document.querySelector('.runBtn2').src = './assets/buttons/run.webp';
        }
        else
        {
            document.querySelector('.runBtn2').src = './assets/buttons/run_light.webp';
        }
    }
    // run button to turn non live when done decrypting
}

// function is made globally accessible
window.getFromTextAreaDecrypt = getFromTextAreaDecrypt;