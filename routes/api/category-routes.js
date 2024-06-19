const router = require("express").Router();
const { Category, Product } = require("../../models");
// const { associations } = require("../../models/Product");

// The `/api/categories` endpoint
// Using try catch to catch errors in this route

router.get("/", async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      // be sure to include its associated Products
      include: [{ model: Product, as: "products" }],
    });
    console.log(categoryData);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  // Using Try catch to catch errors in this route
  try {
    // find one category by its `id` value
    const categoryId = await Category.findOne({
      where: { id: req.params.id },
      // be sure to include its associated Products
      include: [{ model: Product, as: "products" }],
    });
    console.log(categoryId);
    res.status(200).json(categoryId);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  // Use try catch to catch errors in this route
  try {
    // create a new category
    const newCategory = await Category.create(req.body);
    console.log(newCategory);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
