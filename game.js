const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');

function computerPlay(){
    var choicesArray = ["Rock", "Paper", "Scissors"];
    return choicesArray[Math.floor(Math.random() * choicesArray.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if((computerSelection == "Rock" &&
        playerSelection == "rock") ||
        (computerSelection == "Paper" &&
        playerSelection == "paper") ||
        (computerSelection == "Scissors" &&
        playerSelection == "scissors")){
            return "It's a tie!"
        }
    
    else if(computerSelection=="Rock"){
        if(playerSelection == "paper"){
            return "You Win! Paper beats Rock."
        }
        if(playerSelection == "scissors"){
            return "You Lose! Rock beats Scissors."
        }
    }
    else if(computerSelection=="Paper"){
        if(playerSelection == "rock"){
            return "You Lose! Rock beats Paper."
        }
        if(playerSelection == "scissors"){
            return "You Win! Scissors beats Paper."
        }
    }
    else{
        if(playerSelection == "rock"){
            return "You Win! Rock beats Scissors."
        }
        if(playerSelection == "paper"){
            return "You Lose! Scissors beats Paper."
        }
    } 
}

// function game(){
//     var playerScore=0;
//     var computerScore=0;
//     const res = document.querySelector('div');
//     for(var i=0; i<5; i++){
//         console.log("A new round is starting!");
//         var outcome = UIgame();

//         console.log(outcome);
//         if(outcome.includes("Win!", 4)){
//             playerScore++;
//         }
//         else{
//             computerScore++;
//         }
//     }
//     if(playerScore > computerScore){
//         console.log("You Won the game!");
//     }
//     else if(computerScore > playerScore){
//         console.log("You Lost the game!");
//     }
//     else{
//         console.log("It's a tie!");
//     }
// }

UIgame();
const board = document.querySelector('.result');
const result = document.createElement('h2');
function displayResults(outcome){

    result.textContent = outcome;
    result.style.color = 'red';
    board.appendChild(result);
    setTimeout(function () {

        board.removeChild(result);
    }, 3000);
    
    
    
    
}

function UIgame(){
    var playerScore=0;
    var computerScore=0;
    const res = document.querySelector('.result');

    btns.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            var outcome = playRound(e.target.innerText, computerPlay());
            
            displayResults(outcome);
            
           
        })
    });


}
