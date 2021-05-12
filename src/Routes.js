import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Admin from './components/Admin/Admin';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
// import PaymentForm from './components/PaymentForm/PaymentForm';
import AddProduct from './components/AddProduct/AddProduct';
import ProductListAdmin from './components/ProductListAdmin/ProductsListAdmin';
import Login from './components/LogIn/LogIn';
import Modal from './components/EditModal/Modal';
import ProductsListUser from './components/ProductListUser/ProductListUser';
import Cart from './components/Cart/Cart';
import AuthContextProvider from './context/AuthContext';
import ProductsContextProvider from './context/ProductsContext';
import PrivateRoute from './components/PrivateRoute';
import Details from './components/Details/Details';
import Checkout from './components/OrderForm/Checkout';
import Edit from './components/EditModal/Edit';
import Model from './components/Model/Model';
import Polo from './components/Polo/Polo';
import Footer from './components/Footer/Footer';
import Cars from './components/Cars/Cars';
import Gift from './components/Gift/Gift';
import Accessories from './components/Accessories/Accessories';




const Routes = () => {
  return (
    <AuthContextProvider>
        <BrowserRouter>
      <ProductsContextProvider>
          <Header />
          <Switch>
            <PrivateRoute exact path ="/admin" component={Admin} />
            <Route exact path ="/" component={Home} />
            <Route exact path = "/signup" component={SignUp} />
            <Route exact path = "/payment" component={Checkout} />
            <Route exact path = "/addproduct" component={AddProduct} />
            <Route exact path = "/market" component={ProductListAdmin} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact path="/modal" component={Modal} />
            <Route exact path="/shop" component={ProductsListUser} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/model" component={Model} />
            <Route exact path="/polo" component={Polo} />
            <Route exact path="/cars" component={Cars} />
            <Route exact path="/accessories" component={Accessories} />
            <Route exact path="/gift" component={Gift} />
          </Switch>
          <Footer/>
      </ProductsContextProvider>
        </BrowserRouter>
    </AuthContextProvider>
  );
};

export default Routes;