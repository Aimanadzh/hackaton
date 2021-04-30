import MainScreen from './components/MainScreen/MainScreen';
import {BrowserRouter,Switch, Route} from "react-router-dom" 
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthContextProvider from '../src/context/AuthContext'
import React from 'react';
import Header2 from './components/Header2/Header2';


const Routes = () => {
   return (
      <AuthContextProvider>
      <BrowserRouter>
         <Header />
            <Switch>
                    <Route exact path="/login" component={SignIn}/>
                    <Route exact path="/signup" component={SignUp}/>
                    {/*<Route exact path="/header2" component={Header2}/>*/}
              <MainScreen />
            </Switch>
         <Footer/>
      </BrowserRouter>
       </AuthContextProvider>
   );

};

export default Routes;