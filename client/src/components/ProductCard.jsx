import React from 'react';

const ProductCard = ({ product }) => {

  const defaultImage = 'https://via.placeholder.com/300x200?text=No+Image';
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image_url || defaultImage} 
          alt={product.name} 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = defaultImage; }}
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <span className="bg-blue-100 text-blue-800 font-medium px-2 py-1 rounded text-sm">
            ${parseFloat(product.price).toFixed(2)}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-2 line-clamp-3">
          {product.description}
        </p>
        
        <div className="text-xs text-gray-500 mt-4">
          Added: {new Date(product.created_at).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;