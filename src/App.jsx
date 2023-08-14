import React from 'react';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <Provider>
      <Header />
      <ProductCard />
      <Cart />
    </Provider>
  );
}

export default App;
