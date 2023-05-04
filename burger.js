const burgerBtn = document.querySelector('.burger');
const burgerMenuList = document.querySelector('.burgerList');
burgerBtn.addEventListener('click', (e) => {
    burgerBtn.classList.toggle('burger__active');
    burgerMenuList.classList.toggle('burgerList__open');
});
