import React from 'react';
import CartButton from '../CartButton/CartButton';
import UserButton from '../UserButton/UserButton';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

function Header() {

  return (
    <header className="header">
      <div className="container">
        <img className="logotipo" src="/images/logotipo.png" alt="logotipo"/>
        <SearchBar />
        <ul className="container-buttons">
          <li><UserButton /></li>
          <li><CartButton /></li>
        </ul>
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/">Ofertas</a></li>
          <li><a href="/">Novidades</a></li>
          <li><a href="/">Bonecas</a></li>
          <li><a href="/">Esportes</a></li>
          <li><a href="/">Bebês</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
