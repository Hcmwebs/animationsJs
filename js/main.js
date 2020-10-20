
let card =document.querySelector('.card');
let active = false;
card.addEventListener('click', activate);

function activate () {
  if( !active){
    card.classList.add ('active');
    active = true;

  }
  else{
    card.classList.remove('active');
    active = false;
  }
} ;









