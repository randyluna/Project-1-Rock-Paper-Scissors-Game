
const game= ()=>{
    let playerScore=0;
    let computerScore=0;
    let moves=0;

    // functions 
    const playGame=()=>{
        const rockBtn=document.querySelector('.rock')
        const paperBtn=document.querySelector('.paper')
        const scissorBtn=document.querySelector('.scissor');
        
        const playerOptions=[rockBtn,paperBtn,scissorBtn];
        const computerOptions=['rock','paper','scissor']

        // Function to start playing 
        playerOptions.forEach(option=>{
            option.addEventListener('click',function(){

                const movesLeft=document.querySelector('.movesLeft');
                moves++;
                movesLeft.innerText=`Moves Left: ${3-moves}`;

                // computer Choosing

                const choiceNumber=Math.floor(Math.random()*3);
                const computerChoice=computerOptions[choiceNumber];

                // Function to check who wins 
                winner(this.innerText,computerChoice)

                // calling game over after 3 moves 

                if(moves===3){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
    }
    // Function to decide winner
    const winner= (player,computer)=>{
        const results=document.querySelector('.results');
        const PlayerScoreBoard=document.querySelector('.playerPoints');
        const computerScoreBoard=document.querySelector('.computerPoints');
        // fd 
        player=player.toLowerCase();
        computer=computer.toLowerCase();
        if(player===computer){
            results.textContent='Tie'
        }
        else if (player=='rock'){
            if(computer=='paper'){
                results.textContent='Computer Won'
                computerScore++;
                computerScoreBoard.textContent=computerScore;

            }else{
                results.textContent='Player Won'
                playerScore++;
                PlayerScoreBoard.textContent=playerScore;
            }
        }
        else if (player=='scissors'){
            if(computer=='rock'){
                results.textContent='Computer Won'
                computerScore++;
                computerScoreBoard.textContent=computerScore;

            }else{
                results.textContent='Player Won'
                playerScore++;
                PlayerScoreBoard.textContent=playerScore;
            }
        }
        else if (player=='paper'){
            if(computer=='scissors'){
                results.textContent='Computer Won'
                computerScore++;
                computerScoreBoard.textContent=computerScore;
                

            }else{
                results.textContent='Player Won'
                playerScore++;
                PlayerScoreBoard.textContent=playerScore;
            }
        }

    }

    // Function to determine when the game is over 

    const gameOver=(playerOptions,movesLeft)=>{

        const subtitle =document.querySelector('.subtitle');
        const results=document.querySelector('.results');
        const reloadBtn=document.querySelector('.reset');

        playerOptions.forEach(option => {
            option.style.display='none';
        })

        subtitle.innerText='Game Over!!'
        subtitle.style.display='none';

        if(playerScore>computerScore){
            results.innerText='You Won The Game';
            results.style.fontSize='2rem';
            results.style.color='blue'
        }
        else if (playerScore< computerScore){
            results.innerText='You Lost The Game'
            results.style.fontSize='2rem';
            results.style.color='red'
        }
        else{
            results.innerText='Tie'
            results.style.fontSize='2rem';
            results.style.color='yellow'
        }
        reloadBtn.InnerText='Restart'
        reloadBtn.style.display='flex'
        reloadBtn.addEventListener('click',()=>{
            window.location.reload();
        })
    }

    // Calling 
    playGame();

    }
    // calling
    game();

