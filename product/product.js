// get query param
const params = new URLSearchParams(window.location.search)

const title = document.querySelector('#title-page')
const id_product = params.get('id-product')

// set title page 
title.textContent = `${id_product}`



// fetchdata
// show detail product 