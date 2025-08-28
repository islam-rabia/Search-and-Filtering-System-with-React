import { memo } from "react";
import Buttons from "./Buttons";
import { BiSolidShoppingBag } from "react-icons/bi";
import "../css/products.css";
import { Link } from "react-router-dom";

function Products({ products, allProducts, setProducts }) {
  const listProducts = products.map((item) => {
    let { id, title, star, img, reviews, prevPrice, newPrice } = item;
    return (
      <li key={id}>
        <figure>
          <img src={img} alt="image product" />
        </figure>
        <div className="product-title">
          <Link to={`details/${id}`}>
            <h3>{title}</h3>
          </Link>
          <div className="reviews">
            <p>{star}</p>
            <span>{reviews}</span>
          </div>
          <div className="info">
            <p>
              <del>{prevPrice}</del>
              {newPrice}
            </p>
            <button className="add-to-cart">
              <BiSolidShoppingBag />
            </button>
          </div>
        </div>
      </li>
    );
  });

  return (
    <section id="products">
      <Buttons allProducts={allProducts} setProducts={setProducts} />

      <ul className="products-list">{listProducts}</ul>
    </section>
  );
}

export default memo(Products);
