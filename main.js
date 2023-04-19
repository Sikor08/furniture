// PromoSwiper
let dots = document.getElementsByClassName('promoSwiperPagination__dot'),
    dotsAria = document.getElementsByClassName('promoSwiperPagination')[0],
    slides = document.getElementsByClassName('promoSwiperSlides__slide'),
    leftButton = document.getElementById('leftButton'),
    rightButton = document.getElementById('rightButton'),
    slideIndex = 1;

const showSlides = (n) => {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for(let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active')
    }
    slides[slideIndex -1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}
showSlides(slideIndex);

const plusSlides = (n) => {
    showSlides(slideIndex += n);
}
const currentSlide = (n) => {
    showSlides(slideIndex = n);
}
// leftButton.addEventListener('click', () => {
//     plusSlides(-1)
// })
// rightButton.addEventListener('click', () => {
//     plusSlides(1)
// })
dotsAria.addEventListener('click', (e) => {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('promoSwiperPagination__dot') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
})

