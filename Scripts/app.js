let oneVOne = document.getElementById("oneVOne");
let oneVAI = document.getElementById("oneVAI");
let suddenDeath = document.getElementById("suddenDeath");

// 1v1 - 1
// 1vAI - 2
var gameMode = 0;

oneVOne.addEventListener("click", function(e){
    gameMode = 1;
    console.log(gameMode);
});

// oneVAI.addEventListener("click", function(e){
//     gameMode = 2;
//     console.log(gameMode);
//  });

//  suddenDeath.addEventListener("click", function(){
//     console.log(gameMode);
//  })