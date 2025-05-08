import React from 'react';
import ProductForm from '../components/ProductForm';

const ProductSubmission = ({ onProductAdded }) => {
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a New Product</h2>
        <p className="text-gray-600 mb-6">
          Fill out the form below to add a new product to your inventory.
          All fields marked with an asterisk (*) are required.
        </p>
        
        <ProductForm onProductAdded={onProductAdded} />
      </div>
    </div>
  );
};

export default ProductSubmission;