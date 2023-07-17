const inputel = document.getElementById("input");
const quetsionel= document.getElementById("question");
const formel= document.getElementById("form");
const scoreel=document.getElementById("score")

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10); 

const correctans= num1*num2;
let score=JSON.parse(localStorage.getItem("score"))

if(!score){
    score=0;
}

quetsionel.innerText= `what is ${num1} multiply by ${num2}?`

formel.addEventListener("submit", ()=>{
    const useransw = +inputel.value;
    if (useransw===correctans){
        score++;
        updatelocalstorage();
    }
    else{
        score--;
        updatelocalstorage();
    }
})

scoreel.innerText= `score: ${score}`

function updatelocalstorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

