const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      // be sure to include its associated Product data
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // Using try catch to catch errors in this route
  try {
    // find a single tag by its `id`
    const oneTag = await Tag.findOne({
      where: { id: req.params.id },
      // be sure to include its associated Product data
      include: [{ model: Product, through: ProductTag }],
    });
    console.log(oneTag);
    res.status(200).json(oneTag);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  // Use try catch to catch errors in this route
  try {
    // create a new tag
    const newTag = await Tag.create(req.body);
    // console.log(newTag);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: { id: req.params.id },
  })
    .then((updatedTag) => res.status(200).json(updatedTag))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: { id: req.params.id },
  })
    .then((deletedTag) => res.status(200).json(deletedTag))
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
