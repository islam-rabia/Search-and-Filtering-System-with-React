import { memo, useCallback, useState } from "react";
import "../css/buttons.css";
import FilterButton from "./FilterButton";

function Buttons({ allProducts, setProducts }) {
  const [activeButton, setActiveButton] = useState("all");

  const allButtons = [
    { id: 1, title: "All", datatype: "all" },
    { id: 2, title: "Nike", datatype: "flats" },
    { id: 3, title: "Vans", datatype: "heels" },
    { id: 4, title: "Puma", datatype: "sneakers" },
    { id: 5, title: "Adidas", datatype: "sandals" }
  ];

  const handlerActive = useCallback(
    (datatype) => {
      if (datatype === "all") {
        setProducts(allProducts);
      } else {
        let filterProducts = allProducts.filter(
          (ele) => ele.category === datatype
        );
        setProducts(filterProducts);
      }
      setActiveButton(datatype);
    },
    [allProducts, setProducts]
  );

  let list = allButtons.map((ele) => {
    let { id, title, datatype } = ele;
    return (
      <li key={id}>
        <FilterButton
          title={title}
          datatype={datatype}
          activeButton={activeButton}
          handlerActive={handlerActive}
        />
      </li>
    );
  });

  return (
    <div className="filer-products">
      <h2>Recommended</h2>

      <ul className="buttons-list">{list}</ul>
    </div>
  );
}

export default memo(Buttons);
