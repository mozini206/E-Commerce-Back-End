const { Product } = require('../models');

const productData = [
  {
    product_name: 'Number 11 Jersey',
    price: 79.99,
    stock: 224,
    category_id: 1,
  },
  {
    product_name: 'HyperVenom',
    price: 190.0,
    stock: 75,
    category_id: 5,
  },
  {
    product_name: 'Chelsea Cap',
    price: 19.99,
    stock: 32,
    category_id: 4,
  },
  {
    product_name: 'Champions League Final',
    price: 4.99,
    stock: 110,
    category_id: 3,
  },
  {
    product_name: 'Pitch Poster 2021-22',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;