import faker from 'faker';

let products = [];

for (let i=1; i<=20; i++) {
    products.push({
        id: i,
        product: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department()
    })
}

export default products;

