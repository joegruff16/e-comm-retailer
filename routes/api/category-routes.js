const router = require("express").Router();
const { Category, Product } = require("../../models");
// const { associations } = require("../../models/Product");

// The `/api/categories` endpoint
// Using try catch to catch errors in this route

router.get("/", async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product, as: "products" }],
    });
    console.log(categoryData);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  Category.findOne({});
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
