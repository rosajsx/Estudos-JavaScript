//get all keys
const keys = document.querySelectorAll(".key");


//Play notes
function playNote(event){
  // keyCode

  let audioKeyCode = getKeyCode(event);

  //typed or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  let noteKeyCode = key.dataset.note;
  
  // if key exists
  const cantFoundAnyKeys = key;
  

  if(!cantFoundAnyKeys){
    return;
  }

  addPlayingClass(key)
  playAudio(audioKeyCode);
  renderNote(noteKeyCode);

}

function addPlayingClass(key){
  key.classList.add('playing')
}

function getKeyCode(event){
  let keyCode;

  const isKeyboard = event.type ==="keydown";
  if(isKeyboard) {
    keyCode = event.keyCode
  } else{
    keyCode = event.target.dataset.key
  }

  return keyCode;
}



function renderNote(noteKeyCode){
  const textEl = document.querySelector(".text");
  textEl.innerText = noteKeyCode;
}


function playAudio(audioKeyCode){
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

function removePlayingClass(event){
  event.target.classList.remove('playing');
}


function registerEvents(){
  //click with mouse
keys.forEach(function(key){
  key.addEventListener("click", playNote);
  key.addEventListener("transitionend", removePlayingClass);
 })
 
 //keyboard type
 window.addEventListener("keydown", playNote);

}

window.addEventListener("load", registerEvents);

