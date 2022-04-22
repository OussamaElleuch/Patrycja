import { PRODUCTS } from './products.js'

function axiosInstance(data) {
  return new Promise((resolve) => {
    resolve(data)
  })
}

export { PRODUCTS, axiosInstance }
