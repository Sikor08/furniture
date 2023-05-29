const arrivalsSliderList = document.querySelector('.arrivalsSliderList');

const arrivalsSlider__left = document.querySelector('.arrivalsSlider__left');
const arrivalsSlider__right = document.querySelector('.arrivalsSlider__right');
console.log((arrivalsSliderList.children).length) 

let offset = 0;

arrivalsSlider__left.addEventListener('click', () => {
    offset = offset + 30

    if (offset >= 102) {
        offset = -4
    }
    arrivalsSliderList.style.left = - offset + '%';
    offset += 4;
    
   
    console.log(offset)
})

arrivalsSlider__right.addEventListener('click', () => {
    offset -= 38
    arrivalsSliderList.style.left = - offset + '%';
    offset += 4

    console.log(offset)

   
})