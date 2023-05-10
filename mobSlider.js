const mobileImages = document.querySelectorAll('.slider .sliderList .sliderSlide');
const sliderLine = document.querySelector('.slider .sliderList');
console.log(mobileImages)
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * mobileImages.length + 'px';
    mobileImages.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= mobileImages.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = mobileImages.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}


const mobileImagesBottom = document.querySelectorAll('.sliderBottom .sliderListBottom .sliderSlideBottom');
const sliderLineBottom = document.querySelector('.sliderBottom .sliderListBottom');
console.log(mobileImagesBottom)
let count1 = 0;
let width1;

function initBottom() {
    console.log('resize');
    width1 = document.querySelector('.sliderBottom').offsetWidth;
    sliderLineBottom.style.width = width1 * mobileImagesBottom.length + 'px';
    mobileImagesBottom.forEach(item => {
        item.style.width = width1 + 'px';
        item.style.height = 'auto';
    });
    rollSliderBottom();
}

initBottom();
window.addEventListener('resize', initBottom);

document.querySelector('.sliderBottomBtn__next').addEventListener('click', function () {
    count1++;
    if (count1 >= mobileImagesBottom.length) {
        count1 = 0;
    }
    rollSliderBottom();
});

document.querySelector('.sliderBottomBtn__prev').addEventListener('click', function () {
    count1--;
    if (count1 < 0) {
        count1 = mobileImagesBottom.length - 1;
    }
    rollSliderBottom();
});

function rollSliderBottom() {
    sliderLineBottom.style.transform = 'translate(-' + count1 * width1 + 'px)';

}