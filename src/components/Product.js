import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.list.products);
  return (
    <div
      style={{
        display: "flex",
        padding: "30px",
        width: "96vw",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "80px",
        backgroundColor: "rgba(0,0,0,0.1)",
      }}
    >
      {products.map((product) => (
        <div
          style={{
            width: "25%",
            marginBottom: "16px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "8px",
            border: "1px solid rgba(0,0,0,0.4)",
            padding: "16px 32px",
          }}
        >
          <img
            src={product.image}
            alt="image"
            style={{
              width: "200px",
              height: "200px",
            }}
          />
          <h3>{product.title}</h3>
          <h4>Price: {product.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default Product;
