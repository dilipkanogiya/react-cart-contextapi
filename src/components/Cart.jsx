import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, updateItemQuantity, removeItemFromCart, getTotalQuantity, getTotalAmount } = useContext(CartContext);

  const handleIncrease = (item) => {
    updateItemQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="cart">
        <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className='quantiy'>
                <div className="quantity-control">
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)}>+</button>
                </div>
            </div>
            <div className=''>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <button className='remove-btn' onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <div className="cart-summary">
        <div className='total-qty'>
            <div className='flex-left'>Total Quantity: </div>
            <div className='flex-right'>{getTotalQuantity()}</div>
        </div>
        <div className='total-amt'>
            <div className='flex-left'>Total Amount: </div>
            <div className='flex-right'>${getTotalAmount().toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;