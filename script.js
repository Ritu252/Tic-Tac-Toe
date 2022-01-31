console.log("Welcome to tic tac toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
let boxtext = document.querySelectorAll(".box");


//Function to change the turn
const changeTurn = ()=>{
    return (turn==="X"?"0":"X")
}
//Function to check the win
const wincheck = ()=>{
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(i=0; i<wins.length; i++){
        // console.log(boxtext[wins[i][0]].innerText+" written");
        if((boxtext[wins[i][0]].innerText!=="") && (boxtext[wins[i][0]].innerText===boxtext[wins[i][1]].innerText) && (boxtext[wins[i][2]].innerText===boxtext[wins[i][1]].innerText)){
            // console.log(boxtext[wins[i][0]].innerText + " Won");
            document.querySelector(".imfo").innerText = boxtext[wins[i][0]].innerText + " Won";
            isgameover = true;
            document.querySelectorAll('img')[0].style.width = "200px";
            
        }
    }
}
//Game Logic
for(i=0; i<9; i++){
    let boxes = boxtext[i];
    boxes.addEventListener('click',()=>{
        if(boxes.innerText===""){
            boxes.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            wincheck();
            if(!isgameover){
                document.querySelector(".imfo").innerText = "Turn For "+turn;
            }
        }
    })
}

//Game Reset
reset.addEventListener('click',()=>{
    for(i=0; i<boxtext.length; i++){
        boxtext[i].innerText="";
    }
    turn = "X";
    isgameover = false;
    document.querySelector(".imfo").innerText = "Turn For "+turn;
    document.querySelectorAll('img')[0].style.width = "0px";

})