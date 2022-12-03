const testButton = document.getElementById("test_button");
const hangmanPic = document.getElementById("hangman_pic");
let hangmanProgress = 0;

function hangmanDrawing () {
    if (hangmanProgress == 5) hangmanProgress = 0;
    hangmanProgress++;
    if (hangmanProgress == 1) hangmanPic.src = "src/hangman_pics/rope.png";
     else if (hangmanProgress == 2) hangmanPic.src = "src/hangman_pics/head.png";
     else if (hangmanProgress == 3) hangmanPic.src = "src/hangman_pics/body.png";
     else if (hangmanProgress == 4) hangmanPic.src = "src/hangman_pics/hands.png";
     else if (hangmanProgress == 5) hangmanPic.src = "src/hangman_pics/legs.png";
    console.log(hangmanProgress);
}

testButton.addEventListener("click", hangmanDrawing);