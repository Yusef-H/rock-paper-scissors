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




const board = document.querySelector('.result');
const result = document.createElement('h2');
const score = document.querySelector('.score h1');
const player = document.createElement('div');
const computer = document.createElement('div');
UIgame();

function displayResults(outcome){

    result.textContent = outcome;
    result.style.color = 'black';
    result.id = 'threeSeconds';
    board.appendChild(result);
    setTimeout(function(){
        document.getElementById('threeSeconds').className += ' hidden';
    }, 3000);
    document.getElementById('threeSeconds').className -= ' hidden';
}

function updateScoreBoard(playerScore, computerScore){
    player.innerHTML = "Player Score: " + playerScore;
    computer.innerHTML = "Computer Score: "+ computerScore;
    
    score.appendChild(player);
    score.appendChild(computer);
}

const playerWin = document.createElement('div');
const computerWin = document.createElement('div');
const body = document.querySelector('body');

function UIgame(){
    
    var playerScore=0;
    var computerScore=0;
    updateScoreBoard(playerScore, computerScore);
    const res = document.querySelector('.result');
    
    btns.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            var outcome = playRound(e.target.innerText, computerPlay());
            
            displayResults(outcome);
            if(outcome.includes("Win!", 4)){
                // playerScore++;
            }
            else if(outcome.includes("Lose!", 4)){
                computerScore++;
            }
            updateScoreBoard(playerScore, computerScore);

            if(playerScore == 5){
                var elements = document.getElementsByTagName('*');
                for(var i = 0; i<elements.length; i++){
                    if(elements[i].className != "hey"){
                        elements[i].className += ' hidden';
                    }
                }
                body.className += ' win';
            }
            else if(computerScore == 5){
                var elements = document.getElementsByTagName('*');
                for(var i = 0; i<elements.length; i++){
                    if(elements[i].className != "hey"){
                        elements[i].className += ' hidden';
                    }
                }
                body.className += ' lose';
            }
        })
    });

}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }