import { memo } from "react";
import { useParams } from "react-router-dom";
import "../css/details.css";
import RandomProducts from "../components/RandomProducts";

function Details({ allProducts }) {
  const params = useParams();

  let product;
  let findProduct = allProducts.find((ele) => ele.id === +params.id);

  if (findProduct) {
    let { id, title, img, category, newPrice, color } = findProduct;

    product = (
      <li key={id}>
        <figure>
          <img src={img} alt="image product" />
        </figure>
        <div className="product-title">
          <h3>{title}</h3>
          <p>
            Shoes cover our feet. They help us walk and protect our feet. There
            are many kinds, like sport shoes and formal shoes.
          </p>
          <div className="info">
            <p>category: {category}</p>
            <p>
              color: <span style={{ backgroundColor: `${color}` }}></span>
            </p>
            <p>price: ${newPrice}</p>
            <button className="add-to-cart">Add to cart</button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <>
      <section id="details">
        <h3>welcome to details product</h3>
        <ul className="details-list">{product}</ul>

        <div className="random-products">
          <h3>Top shoes near you</h3>
          <RandomProducts allProducts={allProducts} />
        </div>
      </section>
    </>
  );
}

export default memo(Details);
