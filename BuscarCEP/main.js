<<<<<<< HEAD
var inputElement = document.querySelector('#corpo input');
var btnElement = document.querySelector('#corpo button');
var resultElement = document.querySelector('#corpo span');
var nomeElement = document.querySelector('#corpo h3');
var ufElement = document.querySelector('#corpo h2');



 btnElement.onclick = pesquisar;
 

 function pesquisar(){

  cep = inputElement.value;
  
  axios.get('http://cep.republicavirtual.com.br/web_cep.php?cep=' + cep +'&formato=json')
 .then(function(response){

  var resposta = response.data.resultado_txt;
  var nome = response.data.cidade;
  var uf = response.data.uf;

  console.log(response);
  render(nome, uf, resposta);

  

 })
 .catch(function(error){
   console.warn(error);
 });


}

function render(nome, uf, resultado){

  resultElement.innerHTML =  '';
  nomeElement.innerHTML = '';
  ufElement.innerHTML = '';

  if(nome == "" && uf == ""){
    resultElement.innerHTML =  resultado;

  }else {

  resultElement.innerHTML =  resultado;
  nomeElement.innerHTML = 'Cidade: ' +nome;
  ufElement.innerHTML = 'uf: ' +uf;

}

}


 

 

 

 
=======
var inputElement = document.querySelector('#corpo input');
var btnElement = document.querySelector('#corpo button');
var resultElement = document.querySelector('#corpo span');
var nomeElement = document.querySelector('#corpo h3');
var ufElement = document.querySelector('#corpo h2');



 btnElement.onclick = pesquisar;
 

 function pesquisar(){

  cep = inputElement.value;
  
  axios.get('http://cep.republicavirtual.com.br/web_cep.php?cep=' + cep +'&formato=json')
 .then(function(response){

  var resposta = response.data.resultado_txt;
  var nome = response.data.cidade;
  var uf = response.data.uf;

  console.log(response);
  render(nome, uf, resposta);

  

 })
 .catch(function(error){
   console.warn(error);
 });


}

function render(nome, uf, resultado){

  resultElement.innerHTML =  '';
  nomeElement.innerHTML = '';
  ufElement.innerHTML = '';

  if(nome == "" && uf == ""){
    resultElement.innerHTML =  resultado;

  }else {

  resultElement.innerHTML =  resultado;
  nomeElement.innerHTML = 'Cidade: ' +nome;
  ufElement.innerHTML = 'uf: ' +uf;

}

}


 

 

 

 
>>>>>>> e6e0ed1ba9a75d17b5e0ec08b8ee8023b3a864f4
