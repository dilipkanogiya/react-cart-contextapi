import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const { products, cart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const isInCart = (product) => {
    return cart.find(item => item.id === product.id);
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.thumbnail} alt={product.title} />
          <div className="product-details">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {isInCart(product) ? (
              <button onClick={() => removeItemFromCart(product.id)}>Remove from Cart</button>
            ) : (
              <button onClick={() => addItemToCart(product)}>Add to Cart</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;