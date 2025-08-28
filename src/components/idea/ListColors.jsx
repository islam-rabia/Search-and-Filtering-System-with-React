import { memo } from "react";

function ListColors({ colors, activeColor, handleColorClick }) {
  return colors.map((item) => {
    let { id, title, datatype } = item;
    return (
      <li key={id} onClick={() => handleColorClick(datatype)}>
        <div
          className={`radio ${activeColor === datatype ? "active" : ""}`}
          datatype={datatype}
        ></div>
        <p>{title}</p>
      </li>
    );
  });
}

export default memo(ListColors);
