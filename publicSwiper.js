const publicLine = document.querySelector('.publicSwiper__line');
const publicSlidesList = document.querySelectorAll('.publicSlide')
const wrap = document.querySelector('.publicSwiper__wrap');

const publicLeft = document.querySelector('.publicSwiper__left');
const publicRight = document.querySelector('.publicSwiper__right');

const getSlideWidth = () => {
    let slideWidth = (wrap.clientWidth / 4) - 8 + 'px'
    return slideWidth
};
publicSlidesList.forEach(slide => {
    slide.style.width = getSlideWidth()
});
window.addEventListener('resize', () => {
    console.log('resize');
    publicSlidesList.forEach(slide => {
        slide.style.width = getSlideWidth();
    })
})
let ofSet = getSlideWidth()
console.log(ofSet);

publicLeft.addEventListener('click', () => {
    publicLine.style.left = getSlideWidth()
})




var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    console.log(this.value)
    if (value = 2) {
        
    } 
}
