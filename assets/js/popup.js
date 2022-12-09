const popupAuth = document.querySelector('.popup__authorization') //sign-up or sign-in
const popupRegistr = document.querySelector('.popup__registration')
const btnClose = document.querySelectorAll('.popup__authorization-close')
const popupArea = document.querySelectorAll('.popup__area')
const popupRegistrAuth = document.querySelector('.popup__authorization-button-registration')
const popupAuthRegistr = document.querySelector('.popup__registration-button-authorization')
const body = document.querySelector('body')
const personalArea = document.querySelector('.header__personal-area-item')

const reviewsBtn = document.querySelector('.main__reviews-button')//reviews
const popupReviews = document.querySelector('.popup__reviews')

//sign-up or sign-in

personalArea.addEventListener('click', () => {
    body.classList.toggle('scroll-none')
    popupAuth.classList.toggle('visible')
})

for (let i = 0; i < btnClose.length; i++) {
    btnClose[i].addEventListener('click', () => {
        body.classList.remove('scroll-none')
        popupAuth.classList.remove('visible')
        popupRegistr.classList.remove('visible')
        popupReviews.classList.remove('visible')
    })
}
    
for (let i = 0; i < popupArea.length; i++) {
    popupArea[i].addEventListener('click', () => {
        body.classList.remove('scroll-none')
        popupAuth.classList.remove('visible')
        popupRegistr.classList.remove('visible')
        popupReviews.classList.remove('visible')
    })
}

popupRegistrAuth.addEventListener('click', () => {
    popupAuth.classList.toggle('visible')
    popupRegistr.classList.toggle('visible')
})

popupAuthRegistr.addEventListener('click', () => {
    popupAuth.classList.toggle('visible')
    popupRegistr.classList.toggle('visible')
})

//rewiews

reviewsBtn.addEventListener('click', () => {
    popupReviews.classList.toggle('visible')
    body.classList.toggle('scroll-none')
})