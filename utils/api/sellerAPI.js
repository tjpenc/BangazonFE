// eslint-disable-next-line no-unused-vars
import React from 'react';

const getSellers = () => new Promise((resolve, reject) => {
  fetch('https://localhost:7268/api/sellers', {
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

export default getSellers;
