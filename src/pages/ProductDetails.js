import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";
import Details from "../components/Details";
import { setProduct } from "../store/detailsSlice";
import Loader from "../components/Loader";

const ProductsDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.details.product);

  const showDetails = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(setProduct(data));
    } catch (error) {
      console.error("Wystąpił problem z operacją pobierania:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    showDetails();
  }, []);

  return (
    <>
      <Navigation />
      <h1 className="details_header">Product details</h1>
      {isLoading ? <Loader /> : <Details product={product} />}
    </>
  );
};

export default ProductsDetails;
