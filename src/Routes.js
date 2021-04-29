import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom" 
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"


const Routes = () => {
   return (
      <BrowserRouter>
         <Header></Header>
            <Switch>

            </Switch>
         <Footer/>
      </BrowserRouter>
   );
};

export default Routes;