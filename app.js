let btns=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let winMsg=document.querySelector(".winMsgContainer");
let msg=document.querySelector(".msg");
let resetWinBtn=document.querySelector("#resetWin");

let playerX=true;
let playerO=false;

const winPtrn=[[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const resetGame=()=>{
    winMsg.classList.add("hide");
    resetBtn.classList.remove("hide");
    enableBtns();
    playerX=true;
    playerO=false;
};

var x=0;
var o=0;
const checkWinner= ()=>{
    for(let ptrn of winPtrn){ 
        x=0;
        o=0;
        for(let i of ptrn){
            if(btns[i].innerText==="")
                break;
            else if(btns[i].innerText==="X")
                x++;
            else if(btns[i].innerText==="O")
                o++;
        }
        if(x==3){
            win("X");
            break;
        }
        if(o==3){
            win("O");
            break;
        }
    }
};

btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(playerX===true){
            btn.innerText="X";
            playerO=true;
            playerX=false;
        }
        else{
            btn.innerText="O";
            playerX=true;
            playerO=false;
        }
        btn.disabled=true;
        checkWinner();
    });
});

const enableBtns=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
};

resetBtn.addEventListener("click", resetGame);
resetWinBtn.addEventListener("click", resetGame);

const disableBtns=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
};

const win=(winner)=>{
    msg.innerText='Congratulations! The winner is ' + winner + ".";
    winMsg.classList.remove("hide");
    resetBtn.classList.add("hide");
    disableBtns();
};