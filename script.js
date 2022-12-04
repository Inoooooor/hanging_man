const testButton = document.getElementById("test_button");
const hangmanPic = document.getElementById("hangman_pic");
const choiceLetterArr = document.getElementsByClassName("letter");
const missingLettersArr = document.getElementsByClassName("missing_letter");
let hangmanProgress = 0;
let chosenLetterBuffer = 0;
let missingWordArr = "ПАРАГРАФ";

const testChoiceLetterArr = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩъыьЭЮЯ"

// Filling alphabet in HTML

const alphabetDiv = document.getElementById("alphabet");
for (let i = 0; i < testChoiceLetterArr.length; i++) {
    let letterButton = document.createElement("button");
    letterButton.classList = "letter";
    letterButton.value = testChoiceLetterArr[i];
    letterButton.innerHTML = testChoiceLetterArr[i];
    alphabetDiv.append(letterButton);
}


// Picture drawing function 

function hangmanDrawing () {
    hangmanProgress++;
    if (hangmanProgress == 1) hangmanPic.src = "src/hangman_pics/rope.png";
    else if (hangmanProgress == 2) hangmanPic.src = "src/hangman_pics/head.png";
    else if (hangmanProgress == 3) hangmanPic.src = "src/hangman_pics/body.png";
    else if (hangmanProgress == 4) hangmanPic.src = "src/hangman_pics/hands.png";
    else if (hangmanProgress == 5) hangmanPic.src = "src/hangman_pics/legs.png";
}

// Comparing all missing letters with alphabet and adding if found

function testLetterChecking() {
    let letterMatchFlag = 0;
    for (let i = 1; i < missingWordArr.length - 1; i++) {
        if (chosenLetterBuffer == missingWordArr[i]) {
            missingLettersArr[i].innerHTML = chosenLetterBuffer;
            letterMatchFlag = 1;
        }
    }
    return letterMatchFlag ? true : false;
}
// console.log(missingLettersArr.outerText);

// Added clicking on every letter and disabling button after clicking

for (let i = 0; i < choiceLetterArr.length; i++) {
    choiceLetterArr[i].addEventListener("click", () => {
        chosenLetterBuffer = testChoiceLetterArr[i];
        if (testLetterChecking()) {
            choiceLetterArr[i].classList.add("right_letter");
            choiceLetterArr[i].setAttribute("disabled", "disabled");
        } else {
            choiceLetterArr[i].classList.add("wrong_letter");
            choiceLetterArr[i].setAttribute("disabled", "disabled");
            hangmanDrawing();
            gameOver();
        }
    })
};

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

// Deleting everything on page 

const mainElement = document.getElementById("main");

// Making game end in progress... 

let gameOver = () => {
    if (hangmanProgress == 5) {
        mainElement.innerHTML = "";

        const gameOverPic = document.createElement("img");
        gameOverPic.classList = "game_over_pic";
        gameOverPic.src = "src/game_over.png";
        gameOverPic.alt = "Dead smile";
        mainElement.append(gameOverPic);

        const gameOverWords = document.createElement("p");
        gameOverWords.classList = "game_over_words";
        gameOverWords.textContent = "Game Over";
        mainElement.append(gameOverWords);

        const tryAgainButton = document.createElement("button");
        tryAgainButton.classList = "try_again_button";
        tryAgainButton.textContent = "Try Again";
        tryAgainButton.setAttribute("onclick", "window.location.reload()");
        mainElement.append(tryAgainButton);
    }
}


