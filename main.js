// PromoSwiper
let dots = document.getElementsByClassName('promoSwiperPagination__dot'),
    dotsAria = document.getElementsByClassName('promoSwiperPagination')[0],
    slides = document.getElementsByClassName('promoSwiperSlides__slide');
    let av = 1;

    let slideIndex = 1
    const slideMoving = () => {
        av >= 3 ? av = 1 : av++;
        console.log(av)
    }
    slideIndex = av;

    // setInterval(slideMoving, 1000);
    console.log(slideIndex)
  
      

    




  

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

const moving = () => {
    let n = 1
    setTimeout(() => currentSlide(n + 1), 2000);
    setTimeout(() => currentSlide(n + 2), 4000);
    setTimeout(() => currentSlide(n), 6000);
}
// setInterval(moving, 8000)
dotsAria.addEventListener('click', (e) => {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('promoSwiperPagination__dot') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
})


// burger
// const burgerBtn = document.querySelector('.burger');
// const burgerMenuList = document.querySelector('.burgerList');
// burgerBtn.addEventListener('click', (e) => {
//     burgerBtn.classList.toggle('burger__active');
//     burgerMenuList.classList.toggle('burgerList__open');
// });