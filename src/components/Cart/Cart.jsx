import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import { CgClose } from 'react-icons/cg';

function Cart() {
  const { cartItems, isCartVisible, setIsCartVisible, totalPriceItems } = useContext(AppContext);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <span className="close-icon" onClick={() => setIsCartVisible(false)}><CgClose />
        <label className="close-icon-text"> Fechar </label>
      </span>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
        </div>
      ) : (
        <div className="empty-cart">
          <p>Seu carrinho está vazio.</p>
        </div>
      )}
      <div className="cart-resume">Total: {formatCurrency(totalPriceItems, 'BRL')} </div>
    </section>
  );
}

export default Cart;
