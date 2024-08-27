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
      <div className="container">
        <h1 className="homepage_header">Homepage</h1>
        {lastViewedProduct ? (
          <button className="last_viewed_btn" onClick={goBackToProduct}>
            Back to last viewed product
          </button>
        ) : null}
      </div>
    </>
  );
};

export default HomePage;
