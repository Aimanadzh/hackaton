import React from 'react';
import "./Header2.css"
import Logo3 from "../../assets/images/brandlogo.svg"
import SearchLogo3 from "../../assets/images/search.svg"
import { Link } from 'react-router-dom';
import Watch from "../../assets/images/crystallin.jpg"


const Header2 = () => {
   return (
      <header className="headers3">
         <div className="container3">
               <div className="header__regist3">
                  <span><img className="regist__search3" src={SearchLogo3} alt="search3" /></span>
                  <span className="regist__in3">Sign In</span>
                  <button className="regist__up3">Sign Up</button>
               </div>
               <div>
                  <h1 className="headers__title3">
                     <img className="navbar__logo3" src={Logo3} alt="logo"/>
                  </h1>
               </div> 
         </div>
         <div className="header__navbar3">
               <div className="hamburger-menu3">
                  <input type="checkbox3" id="menu__toggle3" />
                  <label htmlFor="menu__toggle3" className="menu__btn3">
                     <span></span>
                  </label>
                  <ul className="navbar__menu3 menu__box3">
                     <li><Link className="nav3" to="" style={{textDecoration: 'none', color: 'black'}}>Jeverly</Link></li>
                     <li><Link className="nav3" style={{textDecoration: 'none', color: 'black'}}>Watches</Link></li>
                     <li><Link className="nav3" style={{textDecoration: 'none', color: 'black'}}>Accessories</Link></li>
                     <li><Link className="nav3" style={{textDecoration: 'none', color: 'black'}}>Decoration</Link></li>
                     <li><Link className="nav3" style={{textDecoration: 'none', color: 'black'}}>Gift</Link></li>
                  </ul>
               </div>
         </div>
         <div className="card__btn">
            <span className="btn1">
               <span className="btns">
               <img className="watch" src={Watch} alt="watch"/>
               <h5>Crystalline Oval Watch</h5>
               <p>Leather strap, White, Rose-gold tone PVD</p>
               </span>
            </span>
         </div>
      </header>
   );
};


export default Header2;