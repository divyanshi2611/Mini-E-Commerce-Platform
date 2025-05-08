function contextualSearch(products, searchQuery) {
    if (!searchQuery || searchQuery.trim() === '') {
      return products;
    }
  
    const query = searchQuery.toLowerCase();
    const keywords = extractKeywords(query);
    
    const semanticMappings = {
      'sit': ['chair', 'sofa', 'couch', 'seat', 'stool', 'bench'],
      'sleep': ['bed', 'mattress', 'pillow', 'blanket'],
      'work': ['desk', 'office', 'laptop', 'computer', 'chair', 'table'],
      'eat': ['table', 'dining', 'Coffee'],
      'store': ['cabinet', 'drawer', 'shelf', 'storage', 'closet'],
      'expensive': ['luxury', 'premium', 'high-end'],
      'cheap': ['affordable', 'budget', 'low-cost', 'inexpensive'],
      'family': ['large', 'spacious', 'big', 'group']
    };
    
    const expandedKeywords = [...keywords];
    
    keywords.forEach(keyword => {
      if (semanticMappings[keyword]) {
        expandedKeywords.push(...semanticMappings[keyword]);
      }
    });
    
    return products.filter(product => {
      const productText = `${product.name} ${product.description}`.toLowerCase();
      
      return expandedKeywords.some(keyword => productText.includes(keyword));
    });
  }
  

  function extractKeywords(query) {
    // List of stopwords to filter out
    const stopwords = ['and', 'the', 'is', 'in', 'it', 'to', 'for', 'with', 'a', 'an', 'on', 'at', 'of', 'i', 'my', 'me', 'need', 'want', 'looking', 'search', 'find', 'get'];
    
    // Split the query into words
    const words = query.toLowerCase().split(/\s+/);
    
    // Filter out stopwords and short words
    return words.filter(word => !stopwords.includes(word) && word.length > 1);
  }
  
  module.exports = contextualSearch;