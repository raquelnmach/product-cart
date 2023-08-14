import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {

  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPriceItems, setTotalPriceItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const value = {
    user,
    setUser,
    product,
    setProduct,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    totalPriceItems,
    setTotalPriceItems,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
