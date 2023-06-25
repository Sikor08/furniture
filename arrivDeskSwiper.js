const arrivalsSliderList = document.querySelector('.arrivalsSliderList');


const arrivalsSlider__left = document.querySelector('.arrivalsSlider__left');
const arrivalsSlider__right = document.querySelector('.arrivalsSlider__right');

const arrivalsSlidesQuantity = (arrivalsSliderList.children).length
console.log((arrivalsSliderList.children).length) 

let offset = 0;

arrivalsSlider__left.addEventListener('click', () => {
    offset = offset + 30
    offset >= arrivalsSlidesQuantity* 34 -102? offset = -4 : offset;
    arrivalsSliderList.style.left = - offset + '%';
    offset += 4;
    arrivalsSlider__right.removeAttribute('disabled', '')
})

arrivalsSlider__right.addEventListener('click', () => {
    if (offset == 0) {
        arrivalsSlider__right.setAttribute('disabled', '')
    } else {
        arrivalsSlider__right.removeAttribute('disabled', '')

        offset -= 38
        arrivalsSliderList.style.left = - offset + '%';
        offset += 4
    }
})