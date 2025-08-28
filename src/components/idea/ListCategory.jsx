import { memo } from "react";

function ListCategory({ categories, activeCategory, handleCategoryClick }) {
  return categories.map((item) => {
    let { id, title, datatype } = item;
    return (
      <li key={id} onClick={() => handleCategoryClick(datatype)}>
        <div
          className={`radio ${activeCategory === datatype ? "active" : ""}`}
          datatype={datatype}
        ></div>
        <p>{title}</p>
      </li>
    );
  });
}

export default memo(ListCategory);
