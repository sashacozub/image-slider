// Get DOM elements
const buttonLeft = document.querySelector('#btn-left');
const buttonRight = document.querySelector('#btn-right');
const slider = document.querySelector('.images-slider');
const sliderImages = document.querySelectorAll('.images-slider img');
const dots = document.querySelectorAll('div[data-dot]');

// Create element for active dot
const activeDot = document.createElement('div');
activeDot.classList.add('dot-active');

// Set the width of the slider
let sliderSize = slider.clientWidth;

// Set counter to first image and not the clone of the last image
let counter = 1;
slider.style.transform = `translateX(${-sliderSize * counter}px)`;
// Assign the active dot to the first image
dots[counter - 1].appendChild(activeDot);


// Slide image to previous image
buttonLeft.addEventListener('click', () => {
    // This ensures the slider won't overshoot if pressed to quick
    if (counter < 1) { return };
    slider.style.transition = 'all 400ms ease-out';
    counter--;
    slider.style.transform = `translateX(${-sliderSize * counter}px)`;
})

// Slide image to next image
buttonRight.addEventListener('click', () => {
    // This ensures the slider won't overshoot if pressed to quick
    if (counter > sliderImages.length - 2) { return };
    slider.style.transition = 'all 400ms ease-out';
    counter++;
    slider.style.transform = `translateX(${-sliderSize * counter}px)`;
})


// Jump from image clone to the actual image
slider.addEventListener('transitionend', () => {
    if (sliderImages[counter].id === 'last-clone') {
        // No transition will hide the jump
        slider.style.transition = 'none';
        counter = sliderImages.length - 2;
        slider.style.transform = `translateX(${-sliderSize * counter}px)`;
    }

    if (sliderImages[counter].id === 'first-clone') {
        slider.style.transition = 'none';
        counter = 1;
        slider.style.transform = `translateX(${-sliderSize * counter}px)`;
    }

    // Reassign active dot element to corresponding image
    dots[counter - 1].appendChild(activeDot);
})


// If window size is changes, also change the slider size and position the current image correctly
window.addEventListener('resize', () => {
    sliderSize = slider.clientWidth;
    slider.style.transform = `translateX(${-sliderSize * counter}px)`;
})



