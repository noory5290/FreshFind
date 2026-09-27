import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [purchased, setPurchased] = useState(false);

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value);
    if (isNaN(val) || val < 1) {
      setQuantity(1);
    } else {
      setQuantity(val);
    }
  };

  const totalPrice = quantity * product.price;

  const handleBuy = () => {
    setPurchased(true);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>

        <span className="product-category">{product.category}</span>

        <p className="product-description">{product.description}</p>

        <p className="price">Rs. {product.price} / KG</p>

        <div className="quantity-box">
          <label>Quantity (KG)</label>

          <button
            type="button"
            className="quantity-btn"
            onClick={handleDecrease}
          >
            −
          </button>

          <input
            type="number"
            value={quantity}
            min="1"
            onChange={handleInputChange}
          />

          <button
            type="button"
            className="quantity-btn"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        <p className="total-price">Total: Rs. {totalPrice}</p>

        <button
          type="button"
          className="buy-btn"
          onClick={handleBuy}
          disabled={purchased}
        >
          {purchased ? 'Purchased ✓' : 'Buy'}
        </button>

        {purchased && (
          <p className="purchase-message" style={{ display: 'block' }}>
            ✓ Purchase Completed! {product.name} - {quantity} KG (Total: Rs. {totalPrice})
          </p>
        )}
      </div>
    </div>
  );
}
