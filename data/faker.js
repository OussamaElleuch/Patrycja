import { faker } from '@faker-js/faker'

const getId = () => faker.datatype.uuid()
const getName = () => faker.commerce.product()
const getPrice = () => Number(faker.finance.amount())
const getImage = () => faker.image.image()
const getDescription = () => faker.lorem.paragraph()
const getRate = () => Math.floor(Math.random() * 5) || 1

export { getId, getName, getPrice, getImage, getDescription, getRate }
