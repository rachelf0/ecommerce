const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Router to GET ALL
router.get('/', (req, res) => {
// find all categories
// be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product,
      attributes:  ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({message: 'No categories found'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

// Router to GET ONE
router.get('/:id', (req, res) => {
// find one category by its `id` value
// be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.paramas.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({message: 'No category found'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

// Router to POST
router.post('/', (req, res) => {
// create a new category
  Category.create({
    category_name: req.body.category_name,
  })
  .then(dbCateogryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Router to PUT (remember, this updates your info in the table)
router.put('/:id', (req, res) => {
// update a category by its `id` value (don't forget when you are updating a specific value you use 'where' and 'req.params')
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData[0]) {
      res.status(404).json({ message: "No category found with this id"});
      return;
    }
    res.json(dbCategoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Router to DELETE
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {  // returns promise
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
