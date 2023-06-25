const publicLine = document.querySelector('.publicSwiper__line');
const publicSwiper = document.querySelector('.publicSwiper')
const publicSlidesList = document.querySelectorAll('.publicSlide')
const wrap = document.querySelector('.publicSwiper__wrap');
const publicLeft = document.querySelector('.publicSwiper__left');
const publicRight = document.querySelector('.publicSwiper__right');
const getSlideWidth = () => {
    let publicSlideWidth = (wrap.clientWidth / 4) - 8 + 'px'
    return publicSlideWidth
};
getSlideWidth()
let height = (parseInt(getSlideWidth()) * 1.2).toFixed(0)
publicSwiper.style.height = height +'px'
publicSlidesList.forEach(slide => {
    slide.style.width = getSlideWidth();
});
let ofSet = parseInt(getSlideWidth())
window.addEventListener('resize', () => {
    publicLine.style.left = 0
    ofSet = 0
    ofSet = parseInt(getSlideWidth())
    console.log(ofSet)
    publicSlidesList.forEach(slide => {
        slide.style.width = getSlideWidth();
    })
    let height = (parseInt(getSlideWidth()) * 1.2).toFixed(0)
    publicSwiper.style.height = height +'px'
})
    publicLeft.addEventListener('click', () => {
        console.log(ofSet)
    publicLine.style.left = - (ofSet + 8) + 'px';
    ofSet += (parseInt(getSlideWidth())) + 8;
    ofSet >= 508 ? ofSet = -8 : ofSet 
})
//mobile
const publicMediaLine = document.querySelectorAll('.publicMediaSwiperSlide');
let publicMediaMaxValue = publicMediaLine.length;
console.log(publicMediaMaxValue)
let publicMediaSwiper = document.getElementById("publicMediaSwiper");
publicMediaSwiper.setAttribute("max", publicMediaMaxValue)
publicMediaSwiper.oninput = function() {
    const publickSlides = document.querySelectorAll('.publicMediaSwiperSlide');
    publickSlides.forEach(slide => {
        if (slide.classList.contains(`publicMediaSwiperSlide__slide${this.value}`)) {
            slide.classList.remove('displayNone')
        } else {
            slide.classList.add('displayNone')
        }
    })
}

