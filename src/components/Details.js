import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLastViewedProduct } from "../store/homeSlice";

const Details = ({ product }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (product.id !== null) {
      dispatch(setLastViewedProduct(product.id));
    }
  }, [product]);
  return (
    <>
      <div
        key={product.id}
        className="details_container"
        style={{ marginTop: "50px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "100px",
            marginLeft: "150px",
          }}
        >
          <img
            src={product.image}
            alt="image"
            style={{
              width: "350px",
              height: "350px",
              border: "3px solid black",
              borderRadius: "5px",
            }}
          />
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
        <div style={{ padding: "80px 150px" }}>
          <b>Description: </b>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
