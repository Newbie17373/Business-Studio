const burg = document.querySelector('.header__burger')
const nav = document.querySelector('.header__part_right')

burg.addEventListener('click', () => {
    body.classList.toggle('scroll-none')
    burg.classList.toggle('turned')
    nav.classList.toggle('expanded')
})