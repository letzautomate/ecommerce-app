import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ProductTable from './components/ProductTable';
import JsonDisplay from './components/JsonDisplay';

function App() {
  const [products, setProducts] = useState([
    { id: 'abc123defg', name: 'Laptop', price: 1000, category: { main: 'Electronics', sub: 'Computers' } },
    { id: 'xyz789hijk', name: 'Smartphone', price: 800, category: { main: 'Electronics', sub: 'Mobile Devices' } },
    { id: 'lmn456pqrs', name: 'Office Chair', price: 150, category: { main: 'Furniture', sub: 'Office' } }
  ]);
  const [showJson, setShowJson] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const displayProductData = () => {
    setShowJson(true);
  };

  return (
    <div>
      <h1>Products</h1>
      <h2>Add a New Product</h2>
      <Form addProduct={addProduct} />
      <ProductTable products={products} />
      <button onClick={displayProductData}>Display Products JSON</button>
      <h2>Products JSON Data:</h2>
      {showJson && <JsonDisplay products={products} />}
    </div>
  );
}

export default App;
