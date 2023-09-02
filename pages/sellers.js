import React, { useEffect, useState } from 'react';
import getSellers from '../utils/api/sellerAPI';
import { getSellerProducts } from '../utils/api/productAPI';

export default function Sellers() {
  const [sellers, setSellers] = useState([]);
  const [products, setProducts] = useState([]);

  const getSellersProducts = (id) => getSellerProducts(id).then(setProducts);

  useEffect(() => {
    getSellers().then(setSellers);
  }, []);

  return (
    <>
      <div>
        {sellers.map((seller) => (
          <div className="card">
            <button type="button" className="card-header" onClick={() => getSellersProducts(seller.id)}>
              {seller.name}
            </button>
          </div>
        ))}
      </div>
      <div>
        {products
          ? (
            products.map((product) => (
              <div className="card">
                <div className="card-header">
                  Product: {product.name}
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">${product.price}</li>
                  <li className="list-group-item">{product.category.name}</li>
                </ul>
              </div>
            ))
          )
          : 'no products'}
      </div>
    </>
  );
}
