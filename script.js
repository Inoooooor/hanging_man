const testButton = document.getElementById("test_button");
const hangmanPic = document.getElementById("hangman_pic");
const choiceLetterArr = document.getElementsByClassName("letter");
const missingLettersArr = document.getElementsByClassName("missing_letter");
let hangmanProgress = 0;
let chosenLetterBuffer = 0;
let lettersMatch = 0;

console.log(choiceLetterArr.length);

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

function letterChecking() {
    for (let i = 1; i < missingLettersArr.length - 1; i++) {
        if (chosenLetterBuffer == missingLettersArr[i].textContent) {
            missingLettersArr[i].style.color = "black";
            return 1;
        }
    }
    return 0;
}


// testButton.addEventListener("click", hangmanDrawing);

// console.log(choiceLetterArr[20].value);

// Added clicking on every letter 

for (let i = 0; i < choiceLetterArr.length; i++) choiceLetterArr[i].addEventListener("click", () => {
    chosenLetterBuffer = choiceLetterArr[i].value;
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

// Hiding missing letters 

for (let i = 1; i < missingLettersArr.length - 1; i++) {
    missingLettersArr[i].style.color = "transparent";
}


// Letter checkiing except hint letters 
