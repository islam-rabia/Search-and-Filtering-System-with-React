import { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Slider from "./components/Slider";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Details from "./page/Details";

function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/68afb6a543b1c97be92de0eb")
      .then((res) => res.json())
      .then((data) => {
        let dataProducts = data.record;
        setProducts(dataProducts);
        setAllProducts(dataProducts);
      });
  }, []);

  return (
    <>
      <Header setProducts={setProducts} allProducts={allProducts} />
      <Routes>
        <Route
          path="/"
          index
          element={
            <>
              <main>
                <Products
                  products={products}
                  setProducts={setProducts}
                  allProducts={allProducts}
                />
                <Slider allProducts={allProducts} setProducts={setProducts} />
              </main>
            </>
          }
        />

        <Route path="details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
