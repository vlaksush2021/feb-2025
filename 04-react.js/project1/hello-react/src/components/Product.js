import React from 'react';
 export const Product = ({...productInfo}) => {
  return (
    <div>Product Name: {productInfo.name}, Price: {productInfo.price}</div>
  )
}