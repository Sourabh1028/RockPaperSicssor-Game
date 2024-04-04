let userScore=0;
let computerScore=0;
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawgame = () => {
    msg.style.backgroundColor="#081b31";
    msg.innerText = "Game Draw. Play Again";
}

const showWinner = (userWin, userChoice, compchoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win :). Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `You lose :(. ${userChoice} beats your ${compchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    //userchoice
    //console.log("user choice =", userChoice);
    //computerChoice
    const compchoice=getCompChoice();
    ///console.log("Comp choice =", compchoice);

    if(userChoice==compchoice) {
        ///draw
        drawgame();
    }
    else{
        let userWin = true;
        if(userChoice=="rock"){
            //paper, sicssor
            userWin = compchoice == "paper" ? false : true;
        }
        else if(userChoice=="paper"){
            //rock, sicssor
            userWin = compchoice == "sicssors" ? false : true;
        }
        else{
            //rock, paper
            userWin = compchoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compchoice);
    }
}

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
