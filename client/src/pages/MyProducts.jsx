import React, { useState, useEffect } from 'react';
import ProductsList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';
import { getAllProducts, searchProducts } from '../services/api';

const MyProducts = ({ refreshTrigger, refreshProducts }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [refreshTrigger]);


  const handleSearch = async (query) => {
    if (!query.trim()) {
      setIsSearching(false);
      setSearchQuery('');
      refreshProducts();
      return;
    }

    try {
      setLoading(true);
      setError('');
      setIsSearching(true);
      setSearchQuery(query);
      
      const searchResults = await searchProducts(query);
      setProducts(searchResults);
    } catch (err) {
      console.error('Error searching products:', err);
      setError('Failed to search products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleClearSearch = () => {
    setIsSearching(false);
    setSearchQuery('');
    refreshProducts();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Products</h2>
      
      <SearchBar onSearch={handleSearch} />
      
      {isSearching && (
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm">
            Showing results for: <span className="font-semibold">"{searchQuery}"</span>
          </p>
          <button
            onClick={handleClearSearch}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Clear search
          </button>
        </div>
      )}
      
      <ProductsList
        products={products}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default MyProducts;