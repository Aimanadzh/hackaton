import MainScreen from './components/MainScreen/MainScreen';
import {BrowserRouter,Switch} from "react-router-dom" 
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"
import React from 'react';


const Routes = () => {
   return (
      <BrowserRouter>
         <Header />
            <Switch>
              <MainScreen />
            </Switch>
         <Footer/>
      </BrowserRouter>
   );

};

export default Routes;