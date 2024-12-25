let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScoreData=document.querySelector("#user-score");
const compCompData=document.querySelector("#comp-score");



const getCompChoice=()=>{
    const options = ["rock","paper","scissor"];
    const ranIdx=Math.floor(Math.random() * 3);
    return options[ranIdx];


}
const drawGame=()=>{
    msg.innerText="Draw Game! Play Again";
    msg.style.background="yellow"

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreData.innerText=userScore;
        msg.innerText=`you Won your ${userChoice} beats ${compChoice}`;
        msg.style.background="green"
    }else{
        compScore++;
        compCompData.innerText=compScore;
         msg.innerText=`you Loss  ${compChoice} beats your ${userChoice}`;
        msg.style.background="red"
    }

}

const playGame=(userChoice)=>{
    //generate computer choice
    const compChoice=getCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin=true;
        if(userChoice === "rock"){
            // comp = paper or scissor
        userWin= compChoice === "paper"? false:true;
        }else if(userChoice === "paper"){
            userWin= compChoice === "scissor"? false:true;
        }else{
            userWin= compChoice === "rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}



choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice)

   })
})