let userscore=0;
let computerscore=0;

const choises=document.querySelectorAll(".choise");
const msg=document.querySelector("#msg");
let resetbtn=document.querySelector(".btn");

const userscorepara=document.querySelector("#userscore");
const comscorepara=document.querySelector("#computerscore");

const gencompchoise=()=>{
    const options =["rock","paper","scissors"];
  const randidx=Math.floor(Math.random()*3);
  return options[randidx];
};

const drawgame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor ="#DD962C";
};

const showwinner=(userwin,userchoise,computerchoise)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoise} beats ${computerchoise}`;
        msg.style.backgroundColor ="green";
    }
    else{
        computerscore++;
        comscorepara.innerText=computerscore;
        msg.innerText=`You lose! ${computerchoise} beats your ${userchoise}`
        msg.style.backgroundColor ="#BE4B88";
    }
};

const playgame=(userchoise)=>{
    const computerchoise=gencompchoise();
    if(userchoise===computerchoise){
        drawgame()
    }
    else{
        let userwin=true;
        if(userchoise==="rock"){
            userwin = computerchoise === "paper" ? false:true;
        }
        else if(userchoise==="paper"){
            userwin = computerchoise === "scissors" ? false:true;
        }
        else{
            userwin = computerchoise === "rock" ? false:true;
        }
        showwinner(userwin,userchoise,computerchoise);
    }
};

choises.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        const userchoise=choise.getAttribute("id");
        playgame(userchoise);
    });
});

const resetgame =()=>{
    userscore=0;
    userscorepara.innerText=0;
    computerscore=0; 
    comscorepara.innerText=0;
    
};

resetbtn.addEventListener("click",resetgame);