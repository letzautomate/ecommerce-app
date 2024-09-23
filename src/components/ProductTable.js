import React from 'react';

function ProductTable({ products }) {
  return (
    <table id="productTable">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.category.main}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
