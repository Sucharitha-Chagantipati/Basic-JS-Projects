const cards = document.getElementById('cards')
const total = document.getElementById('sum')
const message = document.getElementById('message')


function startGame(){
    const firstCard = Math.floor(Math.random() * 18) + 2
const  secondCard = Math.floor(Math.random() * 18) + 2
const sum = firstCard + secondCard
    cards.textContent += firstCard + ' ' + secondCard;
    total.textContent += sum;
    if(sum < 21){
       message.textContent = 'want to draw a new card? 😀'
    }else if(sum == 21){
      message.textContent ='wohoo! you won 😍'
      alert('You Won! 😍')
    }else{
     message.textContent ='you are out of the game 😭'
     
    }
}

function restartGame(){
    cards.textContent = 'Cards:' ;
    total.textContent = 'Sum:';
    message.textContent = '';
}
