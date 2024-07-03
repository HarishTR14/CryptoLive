import React, { useContext } from "react";
import "./Navbar.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        {
          setCurrency({ name: "usd", symbol: "$" });
        }
        break;
      case "eur":
        {
          setCurrency({ name: "eur", symbol: "€" });
        }
        break;
      case "inr":
        {
          setCurrency({ name: "inr", symbol: "₹" });
        }
        break;

      default:
        {
          setCurrency({ name: "usd", symbol: "$" });
        }
        break;
    }
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
        <h1 className="name">CryptoLive</h1>
      </Link>
      <img src="" alt="" />
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler} className="select">
          <option value="usd">USD</option>
          <option value="eur">eur</option>
          <option value="inr">IND</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
