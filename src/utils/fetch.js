const UrlSingleProduct = new URL("https://dummyjson.com/products/")

export const FetchDataSingleProduct = async (idProduct) => {
    try {
        const resp = await fetch(UrlSingleProduct + idProduct)
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(`Bad request [FetchDataSingleProduct with id: ${idProduct}]`);
    }
}

