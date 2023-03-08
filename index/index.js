const Url = new URL("https://dummyjson.com/products/")
const img = document.getElementsByClassName('card-product-image')[0]
const description = document.getElementsByClassName('card-product-description')[0]
const price = document.getElementsByClassName('card-product-price')[0]
const rating = document.getElementsByClassName('card-product-rating')[0]
price.style.color = "#e2e600"
rating.style.color = "#e2e600"
const title = document.getElementsByClassName('card-product-title')[0]
const brand = document.getElementsByClassName('card-product-brand')[0]
const aviability = document.getElementsByClassName('card-product-aviability')[0]
const btn = document.getElementsByClassName('card-product-btn')[0]
const id_prodotto = document.getElementById('id-prodotto-evidenza')
const form_prodotto_evidenza = document.getElementsByClassName('container-prodotto-in-evidenza')[0]


function getRandomArbitrary(min, max) {
    while (true) {
        const number = Math.random() * (max - min) + min
        if (number > 0) {
            return number
        }
    }
  }

const aviabilityCheck = (stock) => {
    if (stock > 0) {
        return '🟢'
    } else {
        return '🔴'
    }
}
const fetchSingleProduct = async () => {
    const resp = await fetch(Url + `${Math.round(getRandomArbitrary(0, 50))}`)
    const data = await resp.json()
    console.log(data);
    img.src = data.images[0]
    description.textContent = data.description
    if (data.description.length > 70) {
        description.textContent = data.description.slice(0, 70) + '...'
    }
    price.textContent = data.price + ' $'
    rating.textContent = data.rating
    title.textContent = data.title
    brand.textContent = data.brand
    aviability.textContent = `Available in stock: ${aviabilityCheck(data.stock)}`
    id_prodotto.value = data.id
}

form_prodotto_evidenza.addEventListener('submit', (e) =>{
    console.log('submit premuto');
})


fetchSingleProduct()