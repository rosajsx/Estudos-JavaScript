import api from './api';

class App{
  constructor(){
    this.users = [];

    this.formEL = document.getElementById('repo-form');
    this.listEL = document.getElementById('repo-list');
    this.inputEL = document.querySelector('input[name=repository]');
    this.registerHandlers();

  }
  registerHandlers(){
    this.formEL.onsubmit = event =>{this.addUser(event);}
  }

  setLoading(loading = true){
    if(loading === true){
      let loadingElement = document.createElement('span');
      loadingElement.appendChild(document.createTextNode('Carregando...'));
      loadingElement.id = 'loading';

      this.formEL.appendChild(loadingElement);
    }else {
      document.getElementById('loading').remove();
    }

  }

  async addUser(event){
    event.preventDefault();
    const userInput = this.inputEL.value;

    if(userInput === 0)
    return;

    this.setLoading();
    try{
    const reponse = await api.get(`users/${userInput}`);

    console.log(reponse);
    const{name, bio, html_url, avatar_url} = reponse.data;

    this.users.push({
      name, 
      bio,
      avatar_url,
      html_url,
    });
    
    this.inputEL.value = "";
    this.render();
  } catch(err){
    alert('O Usuário não existe'); 
    this.inputEL.value = "";
   }

   this.setLoading(false);
   }

   render(){
    this.listEL.innerHTML = "";
  
    this.users.forEach(user => {
  
      let imgEL = document.createElement('img');
      imgEL.setAttribute('src', user.avatar_url);
  
      let titleEL = document.createElement('strong');
      titleEL.appendChild(document.createTextNode(user.name));
  
      let descriptionEL = document.createElement('p');
      let descriptionText;
      if(user.bio === null){
        descriptionText = 'Usuário não possui Biografia'
      }else{
        descriptionText = user.bio;
      }
      descriptionEL.appendChild(document.createTextNode(descriptionText));
  
      let linkEL = document.createElement('a');
      linkEL.target = '_blank';
      linkEL.href = user.html_url;
      linkEL.appendChild(document.createTextNode('Acessar'));

      let delEL = document.createElement('a');
      delEL.href = '#';
      delEL.setAttribute('onclick', 'deleteL()');
      delEL.appendChild(document.createTextNode('Excluir'));
  
      let listItemEL = document.createElement('li');
      listItemEL.appendChild(imgEL);
      listItemEL.appendChild(titleEL);
      listItemEL.appendChild(descriptionEL);
      listItemEL.appendChild(linkEL);

  
      this.listEL.appendChild(listItemEL);
  
      
  
    });
  
  }

  deleteL(){
    this.users.pop();
  }
  
  

}


 new App();

