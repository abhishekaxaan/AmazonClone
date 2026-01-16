import { React, useEffect, useState, useRef } from "react";
import Logo from "../imgs/logo.png";
import LogoSmall from "../imgs/A-logo.png";
import search from "../imgs/search.png";
import wishlist from "../imgs/wishlist.png";
import cart from "../imgs/cart.png";
import orders from "../imgs/orders.png";
import Default from "../imgs/default.png";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import "./navbar.css";
import { app } from "../Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import swal from "sweetalert";
import SubNavbar from "./SubNavbar";

const auth = getAuth(app);

function Navbar() {
  const CartItems = useSelector((state) => state.CartItemsAdded.CartItems);
  const ListItems = useSelector((state) => state.ItemsAdded.ListItems);
  const OrderItems = useSelector((state) => state.OrderAdded.OrderItems);
  const [user, setUser] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [Products, setProducts] = useState([]);

  const navigate = useNavigate();

  const searchResultsRef = useRef(null);

  const totalLength = OrderItems.reduce((acc, item) => {
    // if the item is an array, add its length to the accumulator
    if (Array.isArray(item)) {
      return acc + item.length;
    }
    // otherwise, just add 1 to the accumulator
    return acc + 1;
  }, 0);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    const GetProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const new_data = await data.json();
      setProducts(new_data);
    };

    GetProducts();

    const handleClick = (event) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target)
      ) {
        setSearchText("");
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const searchResults = Products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalQuantity = CartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="navbar desktop-only">
        <NavLink to="/">
          <img src={Logo} className="nav-logo" alt="Amazon Logo" />
        </NavLink>

        <div className="nav-fill">
          <div className="search-bar">
            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search Amazon"
              name="search"
              autoComplete="off"
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
              value={searchText}
              className="search-input"
            />
            <button className="search-btn" type="submit">
              <img src={search} className="search-icon" alt="Search" />
            </button>
            {/* SEARCH */}
          </div>
        </div>

        <div className="right-content">
          <div className="right-section">
            <div
              className="nav-option"
              onClick={() => {
                if (user) {
                  navigate("/account");
                } else {
                  navigate("/login");
                }
              }}
            >
              <span className="nav-line-1">Hello, {user ? user.displayName : "sign in"}</span>
              <span className="nav-line-2">Account & Lists</span>
            </div>

            <div
              onClick={() => navigate("/orders")}
              className="nav-option"
            >
              <span className="nav-line-1">Returns</span>
              <span className="nav-line-2">& Orders</span>
            </div>

            <div
              onClick={() => navigate("/wishlists")}
              className="nav-option"
            >
              <span className="nav-line-1">Your</span>
              <span className="nav-line-2">Wishlist</span>
            </div>

            <div
              onClick={() => navigate("/cart")}
              className="nav-item-cart"
            >
              <img src={cart} className="nav-cart-icon" alt="Cart" />
              <span className="cart-count-badge">{totalQuantity}</span>
              <span className="nav-line-2 cart-text">Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="navbar mobile-only">
        <div className="mobile-nav-left">
          <div className="mobile-menu-btn">
            <span className="hamburger-icon-mobile"></span>
          </div>
          <NavLink to="/">
            <img src={Logo} className="nav-logo-mobile" alt="Amazon Logo" />
          </NavLink>
        </div>

        <div className="mobile-nav-right">

          <div className="mobile-user" onClick={() => navigate(user ? "/account" : "/login")}>
            <span className="mobile-user-name">{user ? user.displayName.split(' ')[0] : "Sign in"}</span>
            <img src={orders} className="mobile-user-icon" alt="User" />
          </div>
          <div className="mobile-cart" onClick={() => navigate("/cart")}>
            <img src={cart} className="mobile-cart-icon" alt="Cart" />
            <span className="mobile-cart-count">{totalQuantity}</span>
          </div>
        </div>
      </div>

      <div className="navbar-mobile-search">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Amazon"
            name="search"
            autoComplete="off"
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            value={searchText}
            className="search-input"
          />
          <button className="search-btn" type="submit">
            <img src={search} className="search-icon" alt="Search" />
          </button>
        </div>
      </div>
      <SubNavbar />

      {searchText !== "" && (
        <div
          ref={searchResultsRef}
          className={`search-results ${searchResults.length ? "show" : ""}`}
        >
          {searchResults.length > 0 &&
            searchResults.map((product) => (
              <div
                onClick={() => {
                  navigate(`/product/${product.id}`);
                }}
                className="search-results2"
                key={product.id}
              >
                <div className="product-img">
                  <img src={product.image} className="product-image" alt={product.title} />
                </div>
                <div className="product-data">
                  <p className="product-title">
                    {product.title.length > 50
                      ? product.title.slice(0, 50) + "..."
                      : product.title}
                  </p>
                  <p className="product-desc">
                    {product.description.length > 50
                      ? product.description.slice(0, 50) + "..."
                      : product.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
