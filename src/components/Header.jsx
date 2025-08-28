import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import "../css/header.css";
import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

function Header({ setProducts, allProducts }) {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const SearchProduct = useCallback(() => {
    const query = inputRef.current.value.toLowerCase();

    if (query === "") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter((item) =>
        item.title.toLowerCase().includes(query)
      );
      setProducts(filtered);
    }
  }, [allProducts, setProducts]);

  return (
    <header>
      <div className="header">
        <div className="header-logo">
          <Link to="/">
            <HiOutlineShoppingCart />
          </Link>
        </div>
        <button onClick={handleClick} className="open-btn">
          <FaBarsStaggered />
        </button>
        <div className={`header-info ${isActive ? "active" : ""}`}>
          <button onClick={handleClick} className="close-btn">
            <IoClose />
          </button>
          <div className="header-search">
            <input
              type="text"
              ref={inputRef}
              placeholder="Enter your search shoes"
              onChange={SearchProduct}
            />
          </div>
          <nav className="navbar">
            <ul className="links-list">
              <li>
                <FaRegHeart />
              </li>
              <li>
                <LuShoppingCart />
              </li>
              <li>
                <FaRegUser />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
