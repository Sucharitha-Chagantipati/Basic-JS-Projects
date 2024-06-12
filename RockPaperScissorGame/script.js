const button = Array.from(document.querySelectorAll('button'));
const result = document.getElementById('result');
const playerResult = document.getElementById('player');
const computerResult = document.getElementById('computer');
const winnerImg = '<img src="https://w7.pngwing.com/pngs/895/695/png-transparent-trophy-gold-medal-winner-medal-gold-award-thumbnail.png" alt="">'
const loserImg = '<img src="https://ih1.redbubble.net/image.4680165523.0137/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="" width="200px">'
const restart = document.getElementById('restart')
let count = 0;
let add =0;

function getComputerChoice(){
    const computer = Math.floor(Math.random() * 3) + 1
    if(computer == 1){
       return "Rock";
    }else if(computer == 2){
    return  "Paper";
    }else if(computer == 3){
    return  "Scissor";
    }
}


button.forEach(btn=>{
    btn.addEventListener('click',playGame)
})

 
function playGame(e){
    const computerChoice = getComputerChoice();
    const player = e.target.innerText;
    if(player === computerChoice  ){
        result.innerHTML = "Tie";
    }else if(player === "Rock" && computerChoice === "Scissor" ||
         player === "Paper" && computerChoice === "Rock" || 
         player === "Scissor" && computerChoice === "Paper"){
        result.innerHTML = "Player Won";
       
    }else{
        result.innerHTML = "Computer Won"
    
    }

    if(result.innerHTML == "Player Won"){
        count++;
        playerResult.innerHTML = "Player: "+count 
    }else if(result.innerHTML == "Computer Won"){
        add++;
        computerResult.innerHTML = "Computer: "+add
    }
    
    if(count == 10 || add == 10){
        if(count > add){
           alert("You Won!") ;
           result.innerHTML = winnerImg;
        }else{
            alert("Game Over You lost!");
            result.innerHTML = loserImg;
        }
    }

}

restart.addEventListener('click',()=>{
    result.innerHTML = '';
    computerResult.innerHTML = "Computer: ";
    playerResult.innerHTML = "Player: ";
    count = 0;
    add = 0;
})

