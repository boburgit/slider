// Shotchik yasadik
let slidePosition = 0;

// carousel__item dagi hamma  divlani chaqirdik
const slides = document.getElementsByClassName('carousel__item');

// uzunligini olchadik
const totalSlides = slides.length;

// prev knopkasi chaqirdik
const prev = document.getElementById('carousel__button--prev');

// next knopkasini chaqirdik
const next = document.getElementById('carousel__button--next');

prev.addEventListener('click', function() {
   moveToPrevSlide()
})


next.addEventListener('click', function() {
   moveToNextSlide()
})

// keyingi rasimga otish uchun funktsiya
function moveToNextSlide() {
 console.log('next');
   if(slidePosition === totalSlides - 1) {
    slidePosition = 0;
   } else {
    slidePosition++;
   }
   updateSlidePosition()

}

// oldingi rasmga qaytish funktsiyasi
function moveToPrevSlide(){
    console.log('prev');


  if(slidePosition === 0) {
      slidePosition = totalSlides -1;
  } else {
      slidePosition--;
  }
    updateSlidePosition()
}

// function updateSlidePosition() {
//     for(let i = 0; i < slides.length; i++) {
//         slides[i].classList.remove('active');
//         slides[i].classList.add('nonActive');
//     }
//     slides[slidePosition].classList.add('active');
// }

function updateSlidePosition() {
    for(let slide of slides) {
        slide.classList.remove('active');
        slide.classList.add('nonActive');
    }
    slides[slidePosition].classList.add('active');
}
