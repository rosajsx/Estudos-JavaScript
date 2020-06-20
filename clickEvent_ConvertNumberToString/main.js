const btnEL = document.querySelector('button');
btnEL.onclick = convertWords;

let frase = [];
  
function insertWords(event){

  let key = event;

  if(key.keyCode === 8){
    deleteLastWord();
  }else{
    createWords(key);
  }

}

function createWords(key){
  
  let letters = [32,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];

  if(letters.includes(key.keyCode) == false){
    return
  } else {
    frase.push(key.key);
    renderWords(frase);
  }

}



function deleteLastWord(){

  frase.pop();
  renderWords(frase);
}



function renderWords(frase){
  const div = document.querySelector(".text_space");
  let content = "";

  for(i in frase){
    content += frase[i];
  }
  div.innerText = content;

}

function convertWords(){

  let letra;
  let letraConvetida = [];

  for(i in frase){
    letra = frase[i];
    letraConvetida.push(letra.charCodeAt());
  }

  renderWords(letraConvetida);

}




window.addEventListener('keydown', insertWords);