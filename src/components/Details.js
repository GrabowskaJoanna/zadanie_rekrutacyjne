import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLastViewedProduct } from "../store/homeSlice";

const Details = ({ product }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (product.id !== null) {
      dispatch(setLastViewedProduct(product.id));
    }
  }, [product, dispatch]);
  return (
    <>
      <div key={product.id} className="details_container">
        <div className="details_info">
          <img src={product.image} alt="image" />
          <div>
            <h2>{product.title}</h2>
            <p>
              <b>Price: </b> {`${product.price} $`}
            </p>
            <p>
              <b>Category: </b> {product.category}
            </p>
            <p>
              <b>Rate: </b>
              {product.rating?.rate}
            </p>
            <p>
              {" "}
              <b>Number of ratings: </b>
              {product.rating?.count}
            </p>
          </div>
        </div>
        <div className="details_description">
          <b>Description: </b>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
