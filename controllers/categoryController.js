import categoryModel from "../models/categoryModel.js";

// CREAT CAT
export const createCategory = async (req, res) => {
  try {
    const { category } = req.body;
    // validation
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "please provide category name",
      });
    }
    await categoryModel.create({ category });
    res.status(201).send({
      success: true,
      message: `${category} category creted successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Create Cat API",
    });
  }
};

// GET ALL CAT
export const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "Categories Fetch Successfully",
      totalCat: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get All Cat API",
    });
  }
};

// DELETE CATEGORY
export const deleteCategoryController = async (req, res) => {
  await categoryModel.findByIdAndDelete(req.params.id);
  res.send({ success: true });
};

// UDPATE CAT
export const updateCategoryController = async (req, res) => {
  const category = await categoryModel.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title },
    { new: true }
  );
  res.send({ success: true, category });
};


