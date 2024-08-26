import React, { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../store/listSlice";
import Product from "../components/Product";

const Products = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const products = useSelector((state) => state.list.products);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(setProducts(data));
      console.log(data);
    } catch (error) {
      console.error("Wystąpił problem z operacją pobierania:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navigation />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Products</h1>
          <Product />
        </>
      )}
    </>
  );
};

export default Products;
