const { Product } = require('../models/models.js');

export const getProducts = async (req, res) => {
  const { description, category } = req.query;

  const query = {
    description: new RegExp(description, 'i'),
    availability: true,
  };

  if (category) {
    query.category = category;
  }

  try {
    const allProducts = await Product.find(query)
      .populate('image')
      .sort({ createdAt: 'desc' });

    if (!allProducts) {
      throw 'product library empty are not available';
    }

    res.status(200).json({ response: allProducts, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};

export const getProductById = async (req, res) => {
  try {
    const oneProduct = await Product.findById(req.params.id);
    if (!oneProduct) {
      throw 'product library empty are not available';
    }
    res.status(200).json({ response: oneProduct, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};

export const deleteProduct = async (req, res) => {
  const { _id } = req.body;
  try {
    if (!_id) {
      throw 'Product id needed to delete';
    }
    await Product.findByIdAndDelete(_id);
    res.status(201).json({
      response: { message: 'Product deleted', productId: _id },
      success: true,
    });
  } catch (error) {
    res.status(400).json({ response: 'Prouct id not found', success: false });
  }
};
