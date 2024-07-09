import React from "react";
import "../component.css/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.description} />
      <p className="description">{product.description}</p>
      <p className="price">
        <span>₦</span> {product.price}
      </p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
