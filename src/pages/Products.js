import React, { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../store/listSlice";
import Product from "../components/Product";
import Loader from "../components/Loader";

const Products = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState({
    field: null,
    isAsc: true,
  });
  const products = useSelector((state) => state.list.products);
  const [originalProducts, setOriginalProducts] = useState([]);

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
      setOriginalProducts(data);
    } catch (error) {
      console.error("Wystąpił problem z operacją pobierania:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  function sortBy(field) {
    const isAsc = sort.field === field ? !sort.isAsc : true;

    const sortedProducts = products.slice().sort((a, b) => {
      if (a[field] < b[field]) {
        return isAsc ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return isAsc ? 1 : -1;
      }
      return 0;
    });

    dispatch(setProducts(sortedProducts));
    setSort({
      field,
      isAsc,
    });
  }

  function resetSort() {
    dispatch(setProducts(originalProducts));
    setSort({
      field: null,
      isAsc: true,
    });
  }

  return (
    <>
      <Navigation />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <h1 className="products_header">Products</h1>
          <button onClick={() => sortBy("title")}>
            Sort by title {sort.field === "title" && (sort.isAsc ? "↑" : "↓")}
          </button>
          <button onClick={() => sortBy("price")}>
            Sort by price {sort.field === "price" && (sort.isAsc ? "↑" : "↓")}
          </button>
          {sort.field !== null && (
            <button onClick={resetSort}>Sort by default</button>
          )}
          <div className="product_card">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
