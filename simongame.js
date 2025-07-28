let start=false;
let level=0;
let gameseq=[];
let userseq=[];
let max=0;
let btns=["pink","blue","orange","green"];

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
 if(start==false){
    console.log("Game Started");
    start=true;
 }
 levelup();
 let gameoverText = document.getElementById("gameover");
 gameoverText.classList.remove("show");
});

function gameflash(btncol){
    btncol.classList.add("gameflash");
    setTimeout(function(){
        btncol.classList.remove("gameflash");
    },1000);
}

function userflash(btncol){
    btncol.classList.add("userflash");
    setTimeout(function(){
        btncol.classList.remove("userflash");
    },500);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level${level}`;
   let rn= Math.floor(Math.random()*4);
   let randcolor=btns[rn];
   gameseq.push(randcolor);
   console.log(` given is ${randcolor}`);
   let btncol=document.querySelector(`.${randcolor}`);
    gameflash(btncol);
}

function btnpress(){
    let btn=this;
    userflash(btn);
   usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
   console.log(`u pressed ${usercolor}`);
   checkcolor(userseq.length-1);
}

function checkcolor(idx){
    if(userseq[idx]==gameseq[idx]){
        console.log("same");
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        max=Math.max(max,level);
        h2.innerHTML=`Game Over!<br>Your Score:${level}</b><br>Press Any Key to restart<br> <b><span style="color:green;">HIGH SCORE:</span>${max}`;
        
        let body=document.querySelector("body");
        bodyflash(body);

    let gameoverText = document.getElementById("gameover");
    gameoverText.classList.add("show");
        reset();
    }
}

function bodyflash(body){
    body.classList.add("bodyflash");
    setTimeout(function(){
        body.classList.remove("bodyflash")},1000);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}

