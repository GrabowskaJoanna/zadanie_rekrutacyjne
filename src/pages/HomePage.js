import React from "react";
import Navigation from "../navigation/Navigation";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const lastViewedProduct = useSelector(
    (state) => state.home.lastViewedProduct,
  );
  const navigate = useNavigate();

  const goBackToProduct = () => {
    navigate(`/products/${lastViewedProduct}`);
  };

  return (
    <>
      <Navigation />
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="container"
      >
        <h1 className="homepage_header">Homepage</h1>
        {lastViewedProduct ? (
          <button
            style={{
              borderRadius: "18px",
              border: "1px solid #00000066",
              padding: "12px",
              height: "60px",
              marginTop: "12px",
            }}
            onClick={goBackToProduct}
          >
            Back to last viewed product
          </button>
        ) : null}
      </div>
    </>
  );
};

export default HomePage;
