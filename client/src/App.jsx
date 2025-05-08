import React, { useState } from 'react';
import Header from './components/Header';
import ProductSubmission from './pages/Productsubmission';
import MyProducts from './pages/MyProducts';

function App() {
  const [activeTab, setActiveTab] = useState('submission');
  const [products, setProducts] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const refreshProducts = () => {
    // Trigger a refresh in the MyProducts component
    setRefreshTrigger(prev => prev + 1);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
    // After adding a product, switch to the My Products tab
    setActiveTab('products');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto py-8 px-4">
        {activeTab === 'submission' ? (
          <ProductSubmission onProductAdded={handleAddProduct} />
        ) : (
          <MyProducts 
            refreshTrigger={refreshTrigger} 
            refreshProducts={refreshProducts}
          />
        )}
      </main>
    </div>
  );
}

export default App;