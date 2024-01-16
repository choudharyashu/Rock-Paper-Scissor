let userScore=0;
let compScore=0;
const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScoreID = document.querySelector("#userScore");
let compScoreID = document.querySelector("#compScore");


let result = (userWin)=>{
    if(userWin)
    {
        userScore++;
        userScoreID.innerText=userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compScoreID.innerText=compScore;
        msg.innerText = "Comp Win";
        msg.style.backgroundColor="red";
    }
    
}

let compChoice = ()=>{
    let choices = ["rock", "paper", "scissor"];
    let randInt = Math.floor(Math.random()*3);
    return choices[randInt];
}

let playGame = (clicked) => {
    let comChoice = compChoice();
    console.log(clicked," ",comChoice);
    if(clicked===comChoice)
    {
        msg.innerText = "DRAW";
        msg.style.backgroundColor="rgb(16, 0, 63)";
    }
    else
    {
        let userWin = true;
        if(clicked==="rock")
        {
            userWin= comChoice==="paper"?false:true;
        }
        else if(clicked==="paper")
        {
            userWin= comChoice==="rock"?true:false;
        }
        else{
            userWin=comChoice==="rock"?false:true;
        }
        result(userWin);
    }
}

choice.forEach((variable)=>{
    variable.addEventListener("click",()=>{
        let clicked = variable.getAttribute("id");
        playGame(clicked);
    })
})