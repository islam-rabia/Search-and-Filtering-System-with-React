import { memo, useEffect, useState } from "react";
import { BiSolidShoppingBag } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import "../css/random.css";

function RandomProducts({ allProducts }) {
  const [randomProducts, setRandomProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (allProducts.length > 0) {
      let filtered = allProducts.filter((ele) => ele.id !== +params.id);
      let selected = [];

      while (selected.length < 3 && filtered.length > 0) {
        let randomIndex = Math.floor(Math.random() * filtered.length);
        selected.push(filtered[randomIndex]);
        filtered.splice(randomIndex, 1);
      }
      setRandomProducts(selected);
    }
  }, [allProducts, params.id]);

  const listProducts = randomProducts.map((item) => {
    let { id, title, star, img, reviews, prevPrice, newPrice } = item;
    return (
      <li key={id}>
        <figure>
          <img src={img} alt="image product" />
        </figure>
        <div className="product-title">
          <Link to={`/details/${id}`}>
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

  return <ul className="random-list">{listProducts}</ul>;
}

export default memo(RandomProducts);
