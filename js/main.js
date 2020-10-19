
let card =document.querySelector('.card');
let active = false;
card.addEventListener('click', () => {
  if( !active){
    card.classList.add ('active');
    active = true;

  }
  else{
    card.classList.remove('active');
    active = false;
  }
} )


let images =[];




