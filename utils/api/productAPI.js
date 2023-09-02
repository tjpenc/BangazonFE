// eslint-disable-next-line no-unused-vars
import React from 'react';

const getProducts = () => new Promise((resolve, reject) => {
  fetch('https://localhost:7268/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .then((resp) => console.warn(resp))
    .catch(reject);
});

const getSellerProducts = (sellerId) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7268/api/products/seller/${sellerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .then((resp) => console.warn(resp))
    .catch(reject);
});

export { getProducts, getSellerProducts };
