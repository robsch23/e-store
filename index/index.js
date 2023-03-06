const Url = new URL("https://dummyjson.com/products/22")
const img = document.getElementsByClassName('card-product-image')[0]
const description = document.getElementsByClassName('card-product-description')[0]
const price = document.getElementsByClassName('card-product-price')[0]
const rating = document.getElementsByClassName('card-product-rating')[0]
price.style.color = "#e2e600"
rating.style.color = "#e2e600"
const title = document.getElementsByClassName('card-product-title')[0]
const aviability = document.getElementsByClassName('card-product-aviability')[0]

const aviabilityCheck = (stock) => {
    if (stock > 0) {
        return '🟢'
    } else {
        return '🔴'
    }
}
const fetchSingleProduct = async () => {
    const resp = await fetch(Url)
    const data = await resp.json()
    console.log(data);
    img.src = data.images[0]
    description.textContent = data.description
    price.textContent = data.price + ' $'
    rating.textContent = data.rating
    title.textContent = data.title
    aviability.textContent = `Available in stock: ${aviabilityCheck(data.stock)}`
}

fetchSingleProduct()