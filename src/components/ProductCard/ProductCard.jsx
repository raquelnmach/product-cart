import React, { useContext, useEffect, useState } from 'react';
import './ProductCard.css';
import { FaRegHeart } from 'react-icons/fa';
import { BsFillCartPlusFill } from 'react-icons/bs';
import Loading from '../Loading/Loading';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';
import ProductService from '../../services/ProductService';

function ProductCard() {
  const { loading, setLoading, cartItems, setCartItems } = useContext(AppContext);
  const [ product, setProduct ] = useState(null);
  const isItemInCart = cartItems.some(item => item.id === (product && product.id));
  const isLoading = loading || !product;

  const handleToggleCart = () => {
    const updatedCart = isItemInCart
      ? cartItems.filter(item => item.id !== (product && product.id))
      : [...cartItems, product];
    setCartItems(updatedCart);
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productData = await ProductService.getProductData();
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, []);

  const renderProductDetails = () => {
    return (
      <div className="product-card">
        <img src={product.image} alt="product" className="card-image" />
        <div className="card-infos">
          <h2 className="card-title">{product.title}</h2>
          <span className="favorite-icon">
            <FaRegHeart />
          </span>
          <p className="card-product-cod">Código: ({product.code})</p>
          <p className="card-price">{formatCurrency(product.price, 'BRL')}</p>
          <p className="card-info-payment">
            em 12x {formatCurrency(product.price / 12, 'BRL')}
          </p>
          <div className="card-description">
            <h4>Descrição:</h4>
            <p className="card-description-text">{product.description}</p>
          </div>
          <button className="add-cart-button" onClick={handleToggleCart} alt="Adicionar ao Carrinho">
            <span className="add-cart-icon">
              <BsFillCartPlusFill />
            </span>
            <p>Adicionar ao Carrinho</p>
          </button>
        </div>
      </div>
    );
  };

  return <div className="product-card-container">{isLoading ? <Loading /> : renderProductDetails()}</div>;
}

export default ProductCard;
