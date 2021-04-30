import React from 'react';
import './Header.css';
import Logo from "../../assets/images/brandlogo.svg"
import SearchLogo from "../../assets/images/search.svg"
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="headers">
            <div className="container">
                <div className="header__regist">
                    <span><img className="regist__search" src={SearchLogo} alt="search" /></span>
                    <span className="regist__in">Sign In</span>
                    <button className="regist__up">Sign Up</button>
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
                    <ul className="navbar__menu menu__box" style={{wordSpacing: '30px'}}>
                        <li><Link className="nav" to="" style={{textDecoration: 'none', color: 'white'}}>Jeverly</Link></li>
                        <li><Link className="nav" style={{texecoration: 'none', color: 'white'}}>Watches</Link></li>
                        <li><Link className="nav" style={{textDecoration: 'none', color: 'white'}}>Accessories</Link></li>
                        <li><Link className="nav" style={{textDecoration: 'none', color: 'white'}}>Decoration</Link></li>
                        <li><Link className="nav" style={{textDecoration: 'none', color: 'white'}}>Gift</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;