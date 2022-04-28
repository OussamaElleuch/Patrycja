import { PRODUCTS } from './products.js'

function axiosInstance(data) {
  return new Promise((resolve) => {
    resolve(data)
  })
}

function getAllProducts() {
  return axiosInstance(PRODUCTS);
}

function getProductsByKeywords(keywords) {
    // keywors : computer 16go hp
    const words = keywords.split(' '); // ['computer', '16go', 'hp']
    const result = PRODUCTS.filter(({ name, description }) => {
        // name: HP PC WITH CORE I5
        // description: New HP Computer with .....
        return words.some(word => name.includes(word) || description.includes(word));
    });
    return result;
}

export { PRODUCTS, getAllProducts, getProductsByKeywords }
