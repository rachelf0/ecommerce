// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Category has many Product
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Product belongsToMany Tag (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tag belongsToMany Product (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// exported connection for node.js
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
