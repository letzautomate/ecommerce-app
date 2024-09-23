import React, { useState } from 'react';

function Form({ addProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const generateProductId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 10; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      id: generateProductId(),
      name,
      price: parseFloat(price),
      category: { main: category, sub: '' }
    };
    addProduct(newProduct);
    setName('');
    setPrice('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <select id="productName" value={name} onChange={(e) => setName(e.target.value)} required>
          <option value="">--Select Product--</option>
          <option value="Laptop">Laptop</option>
          <option value="Smartphone">Smartphone</option>
          <option value="Office Chair">Office Chair</option>
          <option value="Tablet">Tablet</option>
          <option value="Monitor">Monitor</option>
          <option value="Keyboard">Keyboard</option>
          <option value="Headphones">Headphones</option>
        </select>
      </div>
      <div>
        <label htmlFor="productPrice">Price:</label>
        <input
          type="number"
          id="productPrice"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="0.01"
          required
        />
      </div>
      <div>
        <label htmlFor="productCategory">Category:</label>
        <select id="productCategory" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">--Select Category--</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Accessories">Accessories</option>
          <option value="Gaming">Gaming</option>
          <option value="Office Supplies">Office Supplies</option>
        </select>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default Form;
