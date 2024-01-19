const buttons = document.querySelectorAll("button");
let oneVOne = document.getElementById("oneVOne");
let oneVAI = document.getElementById("oneVAI");
let suddenDeath = document.getElementById("suddenDeath");
let playerWho = document.getElementById("playerWho");
let gameWinner = document.getElementById("gameWinner");
let background = document.getElementById("background");
let landingHeadId = document.getElementById("landingHeadId");
let secondPage = document.getElementById("secondPage");
let backBtn = document.getElementById("backBtn");
let bestOfFive = document.getElementById("bestOfFive");
let bestOfSeven = document.getElementById("bestOfSeven");
let thirdPage = document.getElementById("thirdPage");
let fourthPage = document.getElementById("fourthPage");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let catchHand = document.getElementById("catchHand");
let whatWasScore = document.getElementById("whatWasScore");

let gameInstruction = document.getElementById("gameInstruction");
let whoWon = document.getElementById("whoWon");
let playerone = document.getElementById("playerone");
let playertwo = document.getElementById("playertwo");
let cpuChose = document.getElementById("cpuChose");

let backToMain = document.getElementById("backToMain");
// 1v1 - 1
// 1vAI - 2
let gameMode = 0;

// 1 - suddenDeath
// 2 - best of 5
// 3 - best of 7
let gameType = 0;

let roundCounter = 0;
let maxRound = 0;
let playerOneScore = 0;
let playerTwoScore = 0
let cpuScore = 0;
let winnerNumber = 0;

let playerOneTurn = true;

let cpuAnswer = "";

let playerOneInput = "";
let playerTwoInput = "";

backToMain.addEventListener("click", function () {
    gameMode = 0;
    playerOneScore = 0;
    gameType = 0;
    cpuScore = 0;
    playerTwoScore = 0;
    playerOneInput = "";
    playerTwoInput = "";
    playerone.innerText = "Player 1: 0";
    playertwo.innerText = "Player 2: 0";
    gameInstruction.innerText = "Pick your move!";
    background.className = "backgroundImgLanding";
    fourthPage.className = "d-none";
    landingHeadId.className = "";
    cpuChose.innerText = "";
    buttons.forEach(btn => btn.classList.remove('selected'));
});

oneVOne.addEventListener("click", function (e) {
    gameMode = 1;
    background.className = "backgroundImgDifficulty";
    landingHeadId.className = "d-none";
    secondPage.className = "";
});

backBtn.addEventListener("click", function () {
    gameMode = 0;
    background.className = "backgroundImgLanding";
    secondPage.className = "d-none";
    landingHeadId.className = ""

});

oneVAI.addEventListener("click", function (e) {
    gameMode = 2;
    background.className = "backgroundImgDifficulty";
    landingHeadId.className = "d-none";
    secondPage.className = "";
    playerone.innerText = "Player 1: 0";
    playertwo.innerText = "CPU : 0";
    gameInstruction.innerText = "Pick your move!";
});

suddenDeath.addEventListener("click", function (gamemode) {
    gameType = 1;
    secondPage.className = "d-none";
    background.className = "backgroundImgGame";
    thirdPage.className = "";
    gameInstruction.innerHTML = "Player 1 Make your MOVE!";
    gameWinner.innerHTML = "";
    playerWho.innerHTML = "Player 1";
});

bestOfFive.addEventListener("click", function (gamemode) {
    gameType = 2;
    secondPage.className = "d-none";
    background.className = "backgroundImgGame";
    thirdPage.className = "";
    gameInstruction.innerHTML = "Player 1 Make your MOVE!";
    gameWinner.innerHTML = "";
    playerWho.innerHTML = "Player 1";
});

bestOfSeven.addEventListener("click", function (gamemode) {
    gameType = 3;
    secondPage.className = "d-none";
    background.className = "backgroundImgGame";
    thirdPage.className = "";
    gameInstruction.innerHTML = "Player 1 Make your MOVE!";
    gameWinner.innerHTML = "";
    playerWho.innerHTML = "Player 1";
});

rock.addEventListener("click", function () {
    if (gameMode === 2) {
        buttons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        playerOneInput = "rock";
        option1 = true;
    } else {
        if (playerOneTurn) {
            playerOneInput = "rock";
            playerOneTurn = false;
            gameInstruction.innerHTML = "Player 2 Make your MOVE!";
            playerWho.innerHTML = "Player 2";
        } else {
            playerTwoInput = "rock";
            playerOneTurn = true;
            gameInstruction.innerHTML = "Catch Your OPPONENT!";
            playerWho.innerHTML = "Player 1";
            option1 = true;
        }
    }

});

paper.addEventListener("click", function () {
    if (gameMode === 2) {
        buttons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        playerOneInput = "paper";
        option1 = true;
    } else {
        if (playerOneTurn) {
            playerOneInput = "paper";
            playerOneTurn = false;
            gameInstruction.innerHTML = "Player 2 Make your MOVE!";
            playerWho.innerHTML = "Player 2";
        } else {
            playerTwoInput = "paper";
            playerOneTurn = true;
            gameInstruction.innerHTML = "Catch Your OPPONENT";
            playerWho.innerHTML = "Player 1";
            option1 = true;
        }
    }
});

scissor.addEventListener("click", function () {
    if (gameMode === 2) {
        buttons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        playerOneInput = "scissors";
        option1 = true;
    } else {
        if (playerOneTurn) {
            playerOneInput = "scissors";
            playerOneTurn = false;
            gameInstruction.innerHTML = "Player 2 Make your MOVE!";
            playerWho.innerHTML = "Player 2";
        } else {
            playerTwoInput = "scissors";
            playerOneTurn = true;
            gameInstruction.innerHTML = "Catch Your OPPONENT";
            playerWho.innerHTML = "Player 1";
            option1 = true;
        }
    }
});
let option1 = false;
lizard.addEventListener("click", function () {
    if (gameMode === 2) {
            buttons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        playerOneInput = "lizard";
            option1 = true;
        
    } else {
        if (playerOneTurn) {
            playerOneInput = "lizard";
            playerOneTurn = false;
            gameInstruction.innerHTML = "Player 2 Make your MOVE!";
            playerWho.innerHTML = "Player 2";
        } else {
            playerTwoInput = "lizard";
            playerOneTurn = true;
            gameInstruction.innerHTML = "Catch Your OPPONENT";
            playerWho.innerHTML = "Player 1";
            option1 = true;
        }
    }
});

spock.addEventListener("click", function () {
    if (gameMode === 2) {
        buttons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        playerOneInput = "spock";
        option1 = true;
    } else {
        if (playerOneTurn) {
            playerOneInput = "spock";
            playerOneTurn = false;
            gameInstruction.innerHTML = "Player 2 Make your MOVE!";
            playerWho.innerHTML = "Player 2";
        } else {
            playerTwoInput = "spock";
            playerOneTurn = true;
            gameInstruction.innerHTML = "Catch Your OPPONENT";
            playerWho.innerHTML = "Player 1";
            option1 = true;
        }
    }
});

catchHand.addEventListener("click", function () {
    if (playerOneTurn){
        if(option1){
           RunGame();
        }else{
            alert("Choose an option")
        }
        
    }else{
        alert("Pick an option");
    }
        
    
});
async function APICall() {
    const promise = await fetch(`https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption`);
    const data = await promise.text();
    cpuAnswer = data.toLowerCase();

};
function RunGame() {
    if (gameMode === 1) {
        playerWho.innerHTML = "Player 1";
        gameInstruction.innerHTML = "Player 1 Make your MOVE!";
        OnevsOne(playerOneInput, playerTwoInput);
        
    } else {
        gameInstruction.innerHTML = "Player 1 Make your MOVE!";
        OnevsAI();
    }
};

function OnevsAI() {
    if (gameType === 1) {
        // SUDDEN DEATH
        maxRound = 1;
        winnerNumber = 1;
        APICall();
        WinnerOfAI();

    } else if (gameType === 2) {
        // BEST OF 5
        maxRound = 5;
        winnerNumber = 3;
        APICall();
        WinnerOfAI();
    } else {
        // BEST OF 7
        maxRound = 7;
        winnerNumber = 4;
        APICall();
        WinnerOfAI();
    }
};

function OnevsOne() {
    if (gameType === 1) {
        // SUDDEN DEATH
        maxRound = 1;
        winnerNumber = 1;
        WinnerOfOnevOne(playerOneInput, playerTwoInput);
        playerOneInput = "";
        playerTwoInput = "";

    } else if (gameType === 2) {
        // BEST OF 5
        maxRound = 5;
        winnerNumber = 3;
        WinnerOfOnevOne(playerOneInput, playerTwoInput);
        playerOneInput = "";
        playerTwoInput = "";
    } else {
        // BEST OF 7
        maxRound = 7;
        winnerNumber = 4;
        WinnerOfOnevOne(playerOneInput, playerTwoInput);
        playerOneInput = "";
        playerTwoInput = "";
    }
};
function WinnerOfOnevOne(playerOneInput, playerTwoInput) {
    if (playerOneInput === playerTwoInput) {
        maxRound++;
        gameWinner.innerText = "THIS GAME IS A DRAW";
        roundCounter++;
        playerone.innerHTML = "Player 1: " + playerOneScore;
        playertwo.innerHTML = "Player 2: " + cpuScore;
    } else if ((playerOneInput === 'rock' && (playerTwoInput === "scissors" || playerTwoInput === "lizard")) || (playerOneInput == "paper" && (playerTwoInput === "rock" || playerTwoInput === "spock")) || (playerOneInput === "scissors" && (playerTwoInput === "lizard" || playerTwoInput === "paper")) || (playerOneInput === "lizard" && (playerTwoInput === "paper" || playerTwoInput === "spock")) || (playerOneInput === "spock" && (playerTwoInput === "rock" || playerTwoInput === "scissors"))) {
        maxRound++;
        playerOneScore++;
        roundCounter++;
        gameWinner.innerText = "Player 1 WON!";
        playerone.innerHTML = "Player 1: " + playerOneScore;
        playertwo.innerHTML = "Player 2: " + cpuScore;

    } else {
        maxRound++;
        cpuScore++;
        roundCounter++;
        gameWinner.innerText = "Player 2 WON!";
        playerone.innerHTML = "Player 1: " + playerOneScore;
        playertwo.innerHTML = "Player 2: " + cpuScore;
    }

    if (playerOneScore === winnerNumber) {
        fourthPage.className = "";
        thirdPage.className = "d-none"
        background.className = "backgroundImgEnd";
        whoWon.innerHTML = "Player 1 Won!"
        whatWasScore.innerHTML = "Player 1: " + playerOneScore + " Player 2: " + cpuScore;

    } else if (cpuScore === winnerNumber) {
        fourthPage.className = "";
        thirdPage.className = "d-none"
        background.className = "backgroundImgEnd";
        whoWon.innerHTML = "Player 2 Won!"
        whatWasScore.innerHTML = "Player 1: " + playerOneScore + " Player 2: " + cpuScore;
    }
}



async function WinnerOfAI() {
    await APICall();
    if (playerOneInput === cpuAnswer) {
        maxRound++;
        gameWinner.innerText = "THIS GAME IS A DRAW";
        roundCounter++;
        playerone.innerHTML = "Player 1: " + playerOneScore;
        playertwo.innerHTML = "CPU: " + cpuScore;
        cpuChose.innerText = "CPU chose " + cpuAnswer;
    } else if ((playerOneInput === 'rock' && (cpuAnswer === "scissors" || cpuAnswer === "lizard")) || (playerOneInput == "paper" && (cpuAnswer === "rock" || cpuAnswer === "spock")) || (playerOneInput === "scissors" && (cpuAnswer === "lizard" || cpuAnswer === "paper")) || (playerOneInput === "lizard" && (cpuAnswer === "paper" || cpuAnswer === "spock")) || (playerOneInput === "spock" && (cpuAnswer === "rock" || cpuAnswer === "scissors"))) {
        maxRound++;
        playerOneScore++;
        roundCounter++;
        gameWinner.innerText = "Player 1 WON!";
        cpuChose.innerText = "CPU chose " + cpuAnswer;
        playerone.innerHTML = "Player 1: " + playerOneScore;
        playertwo.innerHTML = "CPU: " + cpuScore;

    } else {
        maxRound++;
        cpuScore++;
        roundCounter++;
        gameWinner.innerText = "CPU WON!";
        cpuChose.innerText = "CPU chose " + cpuAnswer;
        playerone.innerHTML = "Player 1: " + playerOneScore;
        playertwo.innerHTML = "CPU: " + cpuScore;
    }

    if (playerOneScore === winnerNumber) {
        fourthPage.className = "";
        thirdPage.className = "d-none"
        background.className = "backgroundImgEnd";
        whoWon.innerHTML = "Player 1 Won!"
        whatWasScore.innerHTML = "Player 1: " + playerOneScore + " CPU: " + cpuScore;

    } else if (cpuScore === winnerNumber) {
        fourthPage.className = "";
        thirdPage.className = "d-none"
        background.className = "backgroundImgEnd";
        whoWon.innerHTML = "CPU Won!"
        whatWasScore.innerHTML = "Player 1: " + playerOneScore + " CPU: " + cpuScore;
    }
};