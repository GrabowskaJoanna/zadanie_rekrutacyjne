import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const showDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      key={product.id}
      className="product_card_item"
      onClick={() => showDetails(product.id)}
    >
      <img src={product.image} alt="image" />
      <h3 className="card_item_title">{product.title}</h3>
      <h4 className="card_item_price">Price: {product.price}</h4>
    </div>
  );
};

export default Product;
