import { memo, useCallback, useState } from "react";
import "../css/slider.css";
import { categories, prices, colors } from "../db/data-slider";
import { BsChevronCompactRight } from "react-icons/bs";
import ListCategory from "./idea/ListCategory";
import ListPrice from "./idea/ListPrice";
import ListColors from "./idea/ListColors";

function Slider({ allProducts, setProducts }) {
  const [isActive, setIsActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePrice, setActivePrice] = useState("all");
  const [activeColor, setActiveColor] = useState("all");

  const handleCategoryClick = useCallback(
    (datatype) => {
      if (datatype === "all") setProducts(allProducts);
      else {
        let filterProduct = allProducts.filter(
          (ele) => ele.category === datatype
        );
        setProducts(filterProduct);
      }
      setActiveCategory(datatype);
    },
    [allProducts, setProducts]
  );

  const handlePriceClick = useCallback(
    (datatype) => {
      if (datatype === "all") setProducts(allProducts);
      else {
        let filterProduct = allProducts.filter(
          (ele) => ele.newPrice === datatype
        );
        setProducts(filterProduct);
      }
      setActivePrice(datatype);
    },
    [allProducts, setProducts]
  );

  const handleColorClick = useCallback(
    (datatype) => {
      if (datatype === "all") setProducts(allProducts);
      else {
        let filterProduct = allProducts.filter((ele) => ele.color === datatype);
        setProducts(filterProduct);
      }
      setActiveColor(datatype);
    },
    [allProducts, setProducts]
  );

  const handlerSlider = () => {
    setIsActive(!isActive);
  };

  return (
    <aside id="slider" className={isActive ? "active" : ""}>
      <div className="slider-content">
        <div className="categories">
          <h3>Category</h3>
          <ul className="list">
            <ListCategory
              categories={categories}
              activeCategory={activeCategory}
              handleCategoryClick={handleCategoryClick}
            />
          </ul>
        </div>

        <div className="price">
          <h3>Price</h3>
          <ul className="list">
            <ListPrice
              prices={prices}
              activePrice={activePrice}
              handlePriceClick={handlePriceClick}
            />
          </ul>
        </div>

        <div className="colors">
          <h3>Colors</h3>
          <ul className="list">
            <ListColors
              colors={colors}
              activeColor={activeColor}
              handleColorClick={handleColorClick}
            />
          </ul>
        </div>

        <button className="btn-slider" onClick={handlerSlider}>
          <BsChevronCompactRight />
        </button>
      </div>
    </aside>
  );
}

export default memo(Slider);
