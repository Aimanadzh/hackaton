import React, {useContext} from 'react';
import './Header.css';
import Logo from "../../assets/images/brandlogo.svg"
import SearchLogo from "../../assets/images/search.svg"
import { Link } from 'react-router-dom';
import { authContext} from '../../context/AuthContext';


export default function Header() {

    const {isAuth} = useContext(authContext)
    return (
        <header className="headers">
            <div className="container">
                <div className="header__logo">
                    
                    {isAuth ? (<Link to="/logout"><span>Log out</span></Link> //нужна функция для логаут чтоб при фолс очищала локал сторэжд
                ) : (
                    <>
                    <Link to="/login"><span>Sign In</span></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                    </>
                    )}
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
                        <li><Link className="nav" to="" style={{textDecoration: 'none', color: 'white'}}>Jeverly</Link></li>
                        <li><Link className="nav" style={{textDecoration: 'none', color: 'white'}}>Watches</Link></li>
                        <li><Link className="nav" style={{textDecoration: 'none', color: 'white'}}>Accessories</Link></li>
                        <li><Link className="nav" style={{textDecoration: 'none', color: 'white'}}>Decoration</Link></li>
                        <li><Link className="nav" style={{textDecoration: 'none', color: 'white'}}>Gift</Link></li>
                        <li><Link className="nav" style={{textDecoration: 'none', color: 'white'}}><img className="navbar__search" src={SearchLogo} alt="search" /></Link></li>
                </ul>
            </div>
        </div>

        </header>
);


