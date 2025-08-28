import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/details.css";

function Details() {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/68afb6a543b1c97be92de0eb")
      .then((res) => res.json())
      .then((data) => {
        let dataProducts = data.record;
        setProducts(dataProducts);
      });
  }, []);

  let product;
  let findProduct = products.find((ele) => ele.id === +params.id);

  if (findProduct) {
    let { id, title, img, category, newPrice } = findProduct;

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
        <ul>{product}</ul>
      </section>
    </>
  );
}

export default memo(Details);
