const buttonLeft = document.querySelector('.btn-left');
const buttonRight = document.querySelector('.btn-right');
const slider = document.querySelector('.images-slider');

const sliderSize = slider.clientWidth;
let counter = 0;

buttonRight.addEventListener('click', () => {
    counter++;
    slider.style.transform = `translateX(${-sliderSize * counter}px)`
})

buttonLeft.addEventListener('click', () => {
    counter--;
    slider.style.transform = `translateX(${-sliderSize * counter}px)`
})