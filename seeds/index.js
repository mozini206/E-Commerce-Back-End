const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('DATABASE SYNCED SUCCESFULLY');
  await seedCategories();
  console.log('CATEGORIES SEEDED SUCCESFULLY');

  await seedProducts();
  console.log('PRODUCTS SEEDED SUCCESFULLY');

  await seedTags();
  console.log('TAGS SEEDED SUCCESFULLY');

  await seedProductTags();
  console.log('PRODUCT TAGS SEEDED SUCCESFULLY');

  process.exit(0);
};

seedAll();