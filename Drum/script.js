const key = Array.from(document.querySelectorAll('.key'))
const keyObj = {
  A : 1,
  B : 2,
  C : 3,
  D : 4,
  E : 5,
  F : 6,
  G : 7,
  H : 8
}

function playSound(e){
  const audio = document.querySelector(
    `audio[data-key="${keyObj[e.target.innerHTML]}"]`
  );
  if(!audio) return;
  audio.play();
}


key.forEach((key)=>
  key.addEventListener('mouseover',playSound)
)


