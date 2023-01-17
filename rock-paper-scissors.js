

    let playerScore =0
    let computerScore =0
    let roundWinner =''

    /*results for one round  */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        computerScore++
        roundWinner = 'computer'
    }

}

/*this is where the computer makes its randomized selection*/
function computerRandom()
{
    var choices =['rock','paper','scissors']
    let computerSelect =choices[Math.floor(Math.random()*choices.length)]
    return computerSelect
}


/*game ends after playing five times  */
function gameOver()
{
    return playerScore ===5 || computerScore ===5
}


const computerScorePara = document.getElementById('computerScore')
const playerScorePara = document.getElementById('playerScore')
const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
const endGameBox = document.getElementById('endGameBox')
const endGameMsg = document.getElementById('endGameMsg')
const overlay = document.getElementById('overlay')

rockButton.addEventListener('click', () => handleClick('rock'));
paperButton.addEventListener('click', () => handleClick('paper') );
scissorsButton.addEventListener('click', () => handleClick('scissors'));
overlay.addEventListener('click', closeEndGameMsg);

function handleClick(playerSelection)
{
    if(gameOver())
    {
        openEndgameMsg()
        return
    }

    const computerSelection = computerRandom()
    playRound(playerSelection, computerSelection)
    updateScore()

    if (gameOver())
    {
        openEndgameMsg()
        setFinalMSG()
    }
}

function updateScore()
{
    playerScorePara.textContent = `${playerScore}`
    computerScorePara.textContent = ` ${computerScore}`
}

function openEndgameMsg()
{
    endGameBox.classList.add('active')
    overlay.classList.add('active')
}

function closeEndGameMsg()
{
    endGameBox.classList.remove('active')
    overlay.classList.remove('active')
}

function setFinalMSG()
{
    return playerScore > computerScore
    ? (endGameMsg.textContent = 'You won!')
    : (endGameMsg.textContent = 'You lost')
}
