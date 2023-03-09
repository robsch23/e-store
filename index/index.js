import { getRandomArbitrary } from '../src/utils/randomUtils.js'
import { FetchDataSingleProduct } from '../src/utils/fetch.js'

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
const inputHiddenIdProdottoEvidenza = document.getElementById('id-prodotto-evidenza')
const form_prodotto_evidenza = document.getElementsByClassName('container-prodotto-in-evidenza')[0]


const aviabilityCheck = (stock) => {
    if (stock > 0) {
        return '🟢'
    } else {
        return '🔴'
    }
}

const ShowFeaturedProduct = async () => {
    // fetch product 
    const data = await FetchDataSingleProduct(getRandomArbitrary(0, 50))
    console.log(data);
    // assign data to card product 
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
    inputHiddenIdProdottoEvidenza.value = data.id
}

form_prodotto_evidenza.addEventListener('submit', (e) =>{
    console.log('Click --> Featured Product');
})

// main script 
ShowFeaturedProduct() // mostra prodotto in evidenza
