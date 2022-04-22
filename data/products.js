import { getId, getName, getPrice, getImage, getDescription, getRate } from './faker.js'

const products = [];

for (let i = 0; i <= 50; i++) {
  products.push({
    id: getId(),
    name: getName(),
    price: getPrice(),
    description: getDescription(),
    rate: getRate(),
    imageUrl: getImage(),
  })
}

export const PRODUCTS = products
