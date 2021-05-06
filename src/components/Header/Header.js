import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/brandlogoblack.svg"
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { productsContext } from "../../context/ProductsContext";

const Header = () => {

    const { cartLength } = useContext(productsContext);

    return (
    <div>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="navbar__regisrt">
              <Link to="/cart">
                <Badge badgeContent={cartLength} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
              <Link to="/login">
                <span>Log In</span>
              </Link>
              <Link to="/signup">

                <button className="signup">Sign up</button>
              </Link>
            </div>

            <div className="header__logo">
              <Link to="/">
                <div>
                  <img className="navbar__logo" src={Logo} alt="logo"/>
                </div>
              </Link>
            </div>
            <div className="header__navbar">
              <div className="hamburger-menu">
                <input type="checkbox" id="menu__toggle" />
                <label htmlFor="menu__toggle" className="menu__btn">
                  <span></span>
                </label>
                  <ul className="navbar__menu menu__box">
                    <li><Link className="nav" to="/jewerly" style={{textDecoration: 'none', color: 'black'}}>Jewerly</Link></li>
                    <li><Link className="nav" to="/watches" style={{textDecoration: 'none', color: 'black'}}>Watches</Link></li>
                    <li><Link className="nav" to="/accessories" style={{textDecoration: 'none', color: 'black'}}>Accessories</Link></li>
                    <li><Link className="nav" to="/decoration" style={{textDecoration: 'none', color: 'black'}}>Decoration</Link></li>
                    <li><Link className="nav" to="/gift" style={{textDecoration: 'none', color: 'black'}}>Gift</Link></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
