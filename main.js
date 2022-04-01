
const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeSom = document.querySelectorAll('audio');

for (let i = 0; i < listaDeTeclas.length; i++) {
    let som = listaDeSom[i]; 
    listaDeTeclas[i].onclick = tocaSom;
    function tocaSom(){
      som.play()
    } 
  listaDeTeclas[i].onkeydown = function(evento){
    if (evento.code === 'Enter' || evento.code === 'Space'){
    listaDeTeclas[i].classList.add('ativa')
  } 
  listaDeTeclas[i].onkeyup = function(){
    listaDeTeclas[i].classList.remove('ativa')
  } 
}
  
}




 
  
  



