
const pOneScored = document.getElementById("pOneScored");
const pTwoScored = document.getElementById("pTwoScored");
const rollButton = document.getElementById("rollButton");
const pTwoRollButton = document.getElementById("playerTwoRollButton");
const newGameButton = document.getElementById("newGameButton")
const winOrLose = document.getElementById("winOrLose")
const holdButton = document.getElementById("holdButton")


console.log(diceImage);

diceImage.style.visibility = "hidden"

let pointScored;
let numberRolled;
let pOneTotal = 0
let pTwoTotal = 0


holdButton.addEventListener("click", () => {
    holdFunction ();
});

rollButton.addEventListener("click", () => {
    pOneRoll()
});

pTwoRollButton.addEventListener("click", () => {
    pTwoRoll ();
});

newGameButton.addEventListener("click", () => {
    newGame();
});

const pOneRoll = () => {
    numberRolled = (Math.ceil(Math.random() * 6));
    diceImage.style.visibility = "visible"
    diceImage.src = `img/dice${numberRolled}.png`
    pOneTotal += numberRolled;
    pOneScored.innerHTML = pOneTotal;
    rollButton.style.visibility = 'visible'
    pTwoRollButton.style.visibility = 'hidden'
    errorMessage ()
};


const pTwoRoll = () => {
    numberRolled = (Math.ceil(Math.random() * 6));
    diceImage.style.visibility = "visible"
    diceImage.src = `img/dice${numberRolled}.png`
    pTwoTotal += numberRolled;
    pTwoScored.innerHTML = pTwoTotal;
    errorMessage ()
};

const holdFunction = () => {
    rollButton.style.visibility = 'hidden'
    pTwoRollButton.style.visibility = 'visible'

}

const newGame = () => {
    pOneTotal = 0
    pTwoTotal = 0
    pOneScored.innerHTML = 0
    pTwoScored.innerHTML = 0
    rollButton.style.visibility = 'visible'
    pTwoRollButton.style.visibility = 'visible'
}


const errorMessage = () => {
    if (numberRolled == 1) {
        winOrLose.textContent = `You scored One, you lose!`
        newGame()
    }
    else if (pOneTotal > 20) {
        winOrLose.textContent = "Player One win!"
        rollButton.style.visibility = "hidden"
        pTwoRollButton.style.visibility = "hidden"
    }
    else if (pTwoTotal > 20) {
        winOrLose.textContent = "Player Two Wins!"
        rollButton.style.visibility = "hidden"
        pTwoRollButton.style.visibility = "hidden"
    }
    else if (20 - pOneTotal > 20 - pTwoTotal) {
        winOrLose.textContent = "Player Two Wins!"
        rollButton.style.visibility = "hidden"
        pTwoRollButton.style.visibility = "hidden"  
    }
    else {
        winOrLose.textContent = "Roll Again!"
    }
}





