const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Jersey',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Sneakers',
  },
  {
    category_name: 'Hoodies',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;