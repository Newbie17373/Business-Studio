const createReview = (name, text, image) => {

    return `
        <div class="main__reviews-column">
        <div class="main__reviews-image">
            <img src="${image}" alt="" class="main__reviews-image-item">
        </div>
        <h4 class="main__reviews__name">${name}</h4>
            <p class="main__reviews__text">
                ${text}
            </p>
        </div>
    `

}

const render = (reviews) => {
    const list = document.querySelector('.main__reviews-row')

    reviews.forEach((item, index) => {
        list.innerHTML += createReview(item.name, item.text, item.image)
    })

}

fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(res => render(res))