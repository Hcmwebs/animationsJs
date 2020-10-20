

let images =['img/nature1.jpg',
'img/nature2.jpg','img/nature3.jpg','img/nature4.jpg','img/nature5.jpg'];
let num = 0
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');


prevBtn.addEventListener('click', prev);

function prev() {
  let imgSlider = document.getElementById('imgSlider');
  num--;
  if( num < 0){
    num = images.length -1;
  }
  imgSlider.src = images[num]
};

nextBtn.addEventListener('click', next);

function next(){
  let imgSlider = document.getElementById('imgSlider');
  num++;
  if(num >= images.length){
    num = 0 ;
  }
  imgSlider.src = images[num];

}