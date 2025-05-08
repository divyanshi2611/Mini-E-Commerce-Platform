import React from 'react';

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">
            Mini E-Commerce Platform
          </h1>
          
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'submission' ? 'tab-active' : 'tab-inactive'
              }`}
              onClick={() => setActiveTab('submission')}
            >
              Product Submission
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'products' ? 'tab-active' : 'tab-inactive'
              }`}
              onClick={() => setActiveTab('products')}
            >
              My Products
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;