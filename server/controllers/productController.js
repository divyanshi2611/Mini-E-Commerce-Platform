const db = require('../db/config');
const contextualSearch = require('../utils/contextualSearch');

const getAllProducts = async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM products ORDER BY created_at DESC'
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ error: 'Failed to get products' });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM products WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error getting product:', error);
    res.status(500).json({ error: 'Failed to get product' });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, description, image_url } = req.body;
    
    if (!name || !price || !description) {
      return res.status(400).json({ error: 'Name, price, and description are required' });
    }
    
    const result = await db.query(
      'INSERT INTO products (name, price, description, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, price, description, image_url || null]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
};

const searchProducts = async (req, res) => {
  try {
    const { query } = req.params;
    
    const result = await db.query('SELECT * FROM products');
    const products = result.rows;
  
    const matchedProducts = contextualSearch(products, query);
    
    res.status(200).json(matchedProducts);
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ error: 'Failed to search products' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  searchProducts
};