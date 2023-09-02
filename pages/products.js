import React, { useEffect, useState } from 'react';
import { getProducts } from '../utils/api/productAPI';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    products.map((product) => (
      <div className="card">
        <div className="card-header">
          Product: {product.name}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">${product.price}</li>
          <li className="list-group-item">Category: {product.category.name}</li>
          <li className="list-group-item">Seller: {product.user.name}</li>
        </ul>
      </div>
    ))
  );
}
