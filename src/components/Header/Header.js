import React from 'react';
import './Header.css';
import Logo from "../../assets/images/brandlogo.svg"
import SearchLogo from "../../assets/images/search.svg"
import { Link } from 'react-router-dom';





const Header = () => {
    return (
        <header className="headers">
            <div className="container">
                <div className="header__logo">
                    <span>Sign In</span>
                    <button>Sign Up</button>
                </div>
                <div>
                    <h1 className="headers__title">
                <img className="navbar__logo" src={Logo} alt="logo"/>
                </h1>
                </div>
                
            </div>
            <div className="header__navbar">
                <div className="hamburger-menu">
                    <input type="checkbox" id="menu__toggle" />
                    <label htmlFor="menu__toggle" className="menu__btn">
                        <span></span>
                    </label>
                    <ul className="navbar__menu menu__box">
                        <li><Link to="" style={{textDecoration: 'none'}}>Jeverly</Link></li>
                        <li><Link style={{textDecoration: 'none'}}>Watches</Link></li>
                        <li><Link style={{textDecoration: 'none'}}>Accessories</Link></li>
                        <li><Link style={{textDecoration: 'none'}}>Decoration</Link></li>
                        <li><Link style={{textDecoration: 'none'}}>Gift</Link></li>
                        <li><Link style={{textDecoration: 'none'}}><img className="navbar__search" src={SearchLogo} alt="search" /></Link></li>
                    </ul>
                </div>
            </div>




        </header>
    );
};

export default Header;