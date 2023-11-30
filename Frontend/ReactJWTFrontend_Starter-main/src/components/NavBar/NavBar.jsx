import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Cocktail Curator</b>
          </Link>
        </li>
        <li>
        {user ? (
            <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
              <p>Search</p>
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
              <p>Search</p>
            </Link>
          )}
        </li>
        <li>
        {user ? (
            <Link to="/Favorites" style={{ textDecoration: "none", color: "white" }}>
              <p>Favorites</p>
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
              <p>Favorites</p>
            </Link>
          )}
        </li>
        <li>
        {user ? (
            <Link to="/ByIngredient" style={{ textDecoration: "none", color: "white" }}>
              <p>By Ingredient</p>
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
              <p>By Ingredient</p>
            </Link>
          )}
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
