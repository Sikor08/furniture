let activeSlide = 1;
const images = document.querySelectorAll('.arrivalsSliderSlide');
console.log(images);
const arrivalsLeftBtn = document.querySelector('.arrivalsSlider__left');
const arrivalsRightBtn = document.querySelector('.arrivalsSlider__right');

arrivalsRightBtn.addEventListener('click', () => {
    images[activeSlide].classList.remove('arrivalsSliderSlide_active');
    if (activeSlide + 1 == images.length) {
        // activeSlide = images.length - 1;
        arrivalsRightBtn.style.filter = 'blur(1px)'
    } else {
        activeSlide++;
        console.log(images);
        
    }
    
    images[activeSlide].classList.add(('arrivalsSliderSlide_active'))

})
arrivalsLeftBtn.addEventListener('click', () => {
    images[activeSlide].classList.remove('arrivalsSliderSlide_active');
    if (activeSlide == 0) {
        activeSlide = 0
    } else {
        activeSlide--;
        arrivalsRightBtn.style.filter = 'none'

    }
    
    images[activeSlide].classList.add(('arrivalsSliderSlide_active'))
})
