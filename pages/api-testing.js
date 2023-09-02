import React, { useEffect, useState } from 'react';
import getProducts from '../utils/api/productAPI';

export default function Testing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    products.map((product) => <div>{product.sellerId}</div>)
  );
}
