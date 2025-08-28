import { memo } from "react";

function FilterButton({ title, datatype, activeButton, handlerActive }) {
  return (
    <button
      onClick={() => handlerActive(datatype)}
      className={activeButton === datatype ? "active" : ""}
      datatype={datatype}
    >
      {title}
    </button>
  );
}
export default memo(FilterButton);
