import axios from 'axios';

    var books = [];
    const inputEL = document.getElementById('campo_pesquisa');
    const btnEL = document.getElementById('btn_pesquisa');
    const listEL = document.getElementById('form');
    btnEL.onclick = pesquisar;
    
 function pesquisar(){
  const valor =  inputEL.value;

  


  
  axios.get('https://www.googleapis.com/books/v1/volumes?q=' + valor)
  .then(function(response){ 
    books = [];

    for(var x=0; x < response.data.items.length; x++){
      console.log(x);
      books.push({
        title: response.data.items[x].volumeInfo.title,
        dataPublicacao: response.data.items[x].volumeInfo.publishedDate,
        editora: response.data.items[x].volumeInfo.publisher,
        capaUrl: response.data.items[x].volumeInfo.imageLinks.thumbnail,
        linkUrl: response.data.items[x].volumeInfo.infoLink
      });
      
    }
    
    console.log(response);
    console.log(books);
    render();
    inputEL.value = "";
  

  }).catch(function(error){
    console.log(error);
    alert('Livro não encontrado');
    listEL.innerHTML = "";
    inputEL.value = "";
  });

}

function render(){
  let content = '';

   listEL.removeChild

  for(var i =0; i <books.length; i++){

    content += '<li>' 
    +'<img src =' + books[i].capaUrl 
    + '<br>' 
    + '<strong>' + books[i].title + '</strong>'
    + '<br>' 
    + '<p>' + 'Editora: ' + books[i].editora
    + '<br>'
    + 'Data de publicação: ' + books[i].dataPublicacao
    + '</p>'
    + '<a target= _blank href=' + books[i].linkUrl + '>'
    + 'Saiba mais' + '</a>'
    +'</li>';

    
    
  }
  listEL.innerHTML=content;
}








