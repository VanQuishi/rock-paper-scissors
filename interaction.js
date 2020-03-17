const container = document.querySelector('#container');
var player_score = 0;
var comp_score = 0; 
        
function getRndInteger(min,max)  //return random integer included min but excluded max
{
    return Math.floor(Math.random() * (max-min)) + min;
}

function computerPlay() //randomly return rock, paper, or scissors
{
    let x = getRndInteger(1,4);
    
    if (x == 1)
    {
        return "rock";
    }

    else if (x == 2)
    {
        return "paper";
    }

    else 
    {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) //declares who wins the round
{
    let p = playerSelection.toLowerCase();

    console.log(computerSelection);
    console.log("player: " + p);

    if (computerSelection == "rock")
    {
        if (p == "rock")
        {
            return "Meh, it's a tie.";
        }

        else if (p == "paper")
        {
            return "Yehet~ You win!";
        }

        else 
        {
            return "Oops, you lose. Try harder =.=";
        }
    }

    if (computerSelection == "paper")
    {
        if (p == "paper")
        {
            return "Meh, it's a tie.";
        }

        else if (p == "scissors")
        {
            return "Yehet~ You win!";
        }

        else 
        {
            return "Oops, you lose. Try harder =.=";
        }
    }

    if (computerSelection == "scissors")
    {
        if (p == "scissors")
        {
            return "Meh, it's a tie.";
        }

        else if (p == "rock")
        {
            return "Yehet~ You win!";
        }

        else 
        {
            return "Oops, you lose. Try harder =.=";
        }
    }
}

function updateScore(roundResult)
{

    if (roundResult == "Yehet~ You win!")
    {
        player_score++;
        
    }

    else if (roundResult == "Oops, you lose. Try harder =.=")
    {
        comp_score++;
       
    }

    if (player_score === 5 || comp_score === 5)
    {
        if(player_score === 5)
        {
            roundResult = "YOU JUST DEFEATED ME. HOW DARE YOU???";
            
        }

        else if (comp_score === 5)
        {
            roundResult = "HAHAHAHA. WEAK!";
            
        }

        playerScores.textContent = player_score;
        compScores.textContent = comp_score;
        player_score = 0;
        comp_score = 0;
        return roundResult;
    }

    playerScores.textContent = player_score;
    compScores.textContent = comp_score;
    return roundResult;
}

//this div displays result in text for each round
const result = document.createElement('div');
result.classList.add('result');
//result.style.backgroundColor = "pink";
//result.style.textDecorationColor = #fffa65;

const playerScores = document.createElement('div');
playerScores.classList.add('playerScore');
//playerScores.style.backgroundColor = "gray";
//playerScores.style.textDecorationColor = "white";


const compScores = document.createElement('div');
compScores.classList.add('compScore');
//compScores.style.backgroundColor = "yellow";
//compScores.style.textDecorationColor = "black";

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    result.textContent = playRound(button.id, computerPlay());
    result.textContent = updateScore(result.textContent);
    });
});

container.appendChild(result);
container.appendChild(playerScores);
container.appendChild(compScores);




//container.appendChild(buttons);
/*function game() //play 5 rounds, keep score, report the final winner
{
    //let player_score = 0;
    //let comp_score = 0;
    
    for (let i = 1; i < 6; i++)
    {
        let player_choice = window.prompt("What is your choice, young one?", "none");
        let comp_choice = computerPlay(); 
        console.log("Round "+ i + ": " + "The robot has... " + comp_choice);
        let result = playRound(player_choice, comp_choice);
        console.log(result);

        if (result == "Yehet~ You win!")
        {
            player_score++;
        }

        else if (result == "Oops, you lose. Try harder =.=")
        {
            comp_score++;
        }

    }

    //rewrite this 

    if (player_score > comp_score)
    {
        
        console.log("Congratz!!! You are the winner <3");
    }

    else if (player_score < comp_score)
    {
        console.log("The robot beats you. Try again.");
    }

    else
    {
        console.log("Good...but not good enough...");
    }
}*/