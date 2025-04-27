import React from 'react';

const productList = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Smartphone', price: 800 },
  { id: 3, name: 'Headphones', price: 150 },
];

export default function ProductDetails({ productId }) {
  const product = productList.find(p => p.id === Number(productId));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div>
      <h3>Product Details</h3>
      <p><strong>{product.name}</strong> - ${product.price}</p>
    </div>
  );
}
