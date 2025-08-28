import { memo } from "react";

function ListPrice({ prices, activePrice, handlePriceClick }) {
  return prices.map((item) => {
    let { id, title, datatype } = item;
    return (
      <li key={id} onClick={() => handlePriceClick(datatype)}>
        <div
          className={`radio ${activePrice === datatype ? "active" : ""}`}
          datatype={datatype}
        ></div>
        <p>{title}</p>
      </li>
    );
  });
}

export default memo(ListPrice);
