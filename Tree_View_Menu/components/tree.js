export default function(data){
  // Pega a tag principal que irá receber o menu
  const tree = document.querySelector('nav#tree')

  // Recebe toda a arvore de elementos
  const menu = document.createElement('ul')

  const firstLevel = data.filter(item => !item.parent);
  const getFirstsLis = firstLevel.map(buildTree); // retorna novo array com li's
  getFirstsLis.forEach(li => menu.append(li)); // adicionar li's ao menu

  function buildTree(item){
    //criando elemento
    const li = document.createElement('li');
    li.innerHTML = item.name

    const children = data.filter(child => child.parent === item.id)

    if(children.length > 0){ 

      //adiciona um clique para os parents
      li.addEventListener('click', event =>{
        //ignora o contexto e olha apenas o evento do item
        event.stopPropagation();
        event.target.classList.toggle('open');
      })
      
      // adiciona uma classe identificadora de que tem filhos
      li.classList.add('has-children')
      //constroi os submenus
      const subMenu = document.createElement('ul');
      children.map(buildTree).forEach(li => subMenu.append(li));
      li.append(subMenu)
    }


    
    return li
  }





  //Adiciona o menu ao HTML
  tree.append(menu)
}

