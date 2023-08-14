import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';
import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem({ data }) {
  const { cartItems, setCartItems, setTotalPriceItems } = useContext(AppContext);
  const { id, image, title, price } = data;
  const [inputValue, setInputValue] = useState(1);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    updateCartTotal(updatedItems);
  };

  const handleQuantityChange = (event) => {
    const rawValue = event.target.value;
    const sanitizedValue = rawValue.replace(/\D/g, ''); 
    const numericValue = parseInt(sanitizedValue, 10); 
    const formattedValue = isNaN(numericValue) ? 1 : Math.max(numericValue, 1); 
    setInputValue(formattedValue.toString());
  };

  const updateCartTotal = (items) => {
    const newTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPriceItems(newTotal);
  };

  useEffect(() => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: inputValue } : item
    );

    setCartItems(updatedCartItems);
    updateCartTotal(updatedCartItems);
  }, [inputValue]);

  return (
    <section className="cart-item">
      <img src={image} alt="imagem do produto" className="cart-item-image" />
      <div className="cart-item-content">
        <p className="cart-item-title">{title}</p>
        <p className="cart-item-unit-price-title">Valor unitário:</p>
        <p className="cart-item-unit-price">R$ {formatCurrency(price, 'BRL')}</p>

        <div className="product-item-counter">
          <button className="cart-item-decrease" onClick={() => setInputValue(Math.max(inputValue - 1, 1))}>
            -
          </button>
          <input
            type="text"
            className="cart-item-quantity"
            value={inputValue}
            onChange={handleQuantityChange}
          />
          <button className="cart-item-increase" onClick={() => setInputValue(inputValue + 1)}>
            +
          </button>
        </div>

        <button type="button" className="button-remove-item" onClick={handleRemoveItem}>
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CartItem;
