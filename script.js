const testButton = document.getElementById("test_button");
const hangmanPic = document.getElementById("hangman_pic");
const choiceLetterArr = document.getElementsByClassName("letter");
const missingLettersArr = document.getElementsByClassName("missing_letter");
let hangmanProgress = 0;
let chosenLetterBuffer = 0;
let lettersMatch = 0;
let missingWordArr = "ПИЗДЕЦ";

const testChoiceLetterArr = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩъыьЭЮЯ"

// Filling alphabet\

const alphabetDiv = document.getElementById("alphabet");
for (let i = 0; i < testChoiceLetterArr.length; i++) {
    let letterButton = document.createElement("button");
    letterButton.classList = "letter";
    letterButton.value = testChoiceLetterArr[i];
    letterButton.innerHTML = testChoiceLetterArr[i];
    alphabetDiv.append(letterButton);
}


let gameOver = () => {
    if (hangmanProgress == 5) window.stop();
}

function hangmanDrawing () {
    hangmanProgress++;
    if (hangmanProgress == 1) hangmanPic.src = "src/hangman_pics/rope.png";
    else if (hangmanProgress == 2) hangmanPic.src = "src/hangman_pics/head.png";
    else if (hangmanProgress == 3) hangmanPic.src = "src/hangman_pics/body.png";
    else if (hangmanProgress == 4) hangmanPic.src = "src/hangman_pics/hands.png";
    else if (hangmanProgress == 5) hangmanPic.src = "src/hangman_pics/legs.png";
    console.log(hangmanProgress);
}

// Letter checkiing except hint letters 

function letterChecking() {
    for (let i = 1; i < missingLettersArr.length - 1; i++) {
        if (chosenLetterBuffer == missingLettersArr[i].textContent) {
            missingLettersArr[i].style.color = "black";
            return 1;
        }
    }
    return 0;
}

// Comparing all missing letters with alphabet 

function testLetterChecking() {
    for (let i = 1; i < missingWordArr.length - 1; i++) {
        if (chosenLetterBuffer == missingWordArr[i]) return true;
    }
    return false;
}


// testButton.addEventListener("click", hangmanDrawing);

// Added clicking on every letter and disabling button after clicking

for (let i = 0; i < choiceLetterArr.length; i++) choiceLetterArr[i].addEventListener("click", () => {
    chosenLetterBuffer = testChoiceLetterArr[i];
    if (letterChecking()) {
        choiceLetterArr[i].classList.add("right_letter");
        choiceLetterArr[i].setAttribute("disabled", "disabled");
    } else {
        choiceLetterArr[i].classList.add("wrong_letter");
        choiceLetterArr[i].setAttribute("disabled", "disabled");
        hangmanDrawing();
        gameOver();
    }
    console.log(chosenLetterBuffer);
});

// Drawing missing letters 

const missingWordDiv = document.getElementById("missing_word");
for (let i = 0; i < missingWordArr.length; i++) {
    if ( i == 0 || i == missingWordArr.length - 1) {
        let span = document.createElement("span");
        span.classList = "missing_letter";
        span.innerHTML = missingWordArr[i];
        missingWordDiv.append(span);
    } else {
        let span = document.createElement("span");
        span.classList = "missing_letter";
        span.innerHTML = "";
        missingWordDiv.append(span);
    }
}

// Hiding missing letters 

// for (let i = 1; i < missingLettersArr.length - 1; i++) {
//     missingLettersArr[i].style.color = "transparent";
// }


// choiceLetterArr[2].setAttribute("disabled", "disabled"); 