
dices = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];


function rollTheDice() {
    dice1 = Math.floor(Math.random() * 6);

    document.querySelector(".img1").setAttribute("src", dices[dice1]);

    dice2 = Math.floor(Math.random() * 6);

    document.querySelector(".img2").setAttribute("src", dices[dice2]);

    var result = document.querySelector("h1");

    if (dice1 > dice2) {
        result.innerHTML = "Player 1 Wins!!"
    } else if (dice2 > dice1) {
        result.innerHTML = "Player 2 Wins!!"
    } else {
        result.innerHTML = "Fairplay Wins!!"
    }
}






