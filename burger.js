const burgerBtn = document.querySelector('.humburger');
const burgerMenuList = document.querySelector('.burgerMenuList');
burgerBtn.addEventListener('click', (e) => {
    burgerBtn.classList.toggle('humburger__active');
    burgerMenuList.classList.toggle('burgerMenuList__open')
});
