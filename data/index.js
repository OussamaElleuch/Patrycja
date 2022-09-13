import { PRODUCTS } from './products.js'

function axiosInstance(data) {
  return new Promise((resolve) => {
    resolve(data)
  })
}

function getAllProducts() {
  return axiosInstance(PRODUCTS);
}

function getProductsByKeywords(products, keywords) {
  // keywors : computer 16go hp
  const words = keywords.toLowerCase().split(' '); // ['computer', '16go', 'hp']
  const result = products.filter(({ name, description }) => {
    // name: HP PC WITH CORE I5
    // description: New HP Computer with .....
    return words.some(word => name.toLowerCase().includes(word) || description.toLowerCase().includes(word));
  });
  return result;
}

function getProductsByPriceRange(products, minPrice, maxPrice) {
  const filteredResult = products.filter(({ price }) => {
    return price < maxPrice && price > minPrice
  })
  const sortedResult = filteredResult.sort((a, b) => (a.price < b.price) ? 1 : -1)
  return sortedResult
}

export { PRODUCTS, getAllProducts, getProductsByKeywords, getProductsByPriceRange }
