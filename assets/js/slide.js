const slide = document.querySelector('.slide');
const image = document.querySelectorAll('.slide img');
const tombolKembali = document.querySelector('#kembali');
const tombolLanjut = document.querySelector('#lanjut');
let slider = 1;
const size = image[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * slider) + 'px)';

tombolLanjut.addEventListener('click', ()=> {
  if (slider >= image.length) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  slider++;
  slide.style.transform = 'translateX(' + (-size * slider) + 'px)';
});

tombolKembali.addEventListener('click', ()=> {
    if (slider <= 0) return ;
    slide.style.transition = "transform 0.4s ease-in-out";
    slider--;
    slide.style.transform = 'translateX(' + (-size * slider) + 'px)';
  });

slide.addEventListener('transitionend', ()=> {
    if(image[slider].id === 'terakhir' ){
        slide.style.transition = "none";
        slider = image.length -2;
        slide.style.transform = 'translateX(' + (-size * slider) + 'px)';
    }
    if(image[slider].id === 'pertama' ){
        slide.style.transition = "none";
        slider = image.length - slider;
        slide.style.transform = 'translateX(' + (-size * slider) + 'px)';
    }
});