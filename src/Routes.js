import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Admin from './components/Admin/Admin';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import PaymentForm from './components/PaymentForm/Payment';
import AddProduct from './components/AddProduct/AddProduct';
import ProductListAdmin from './components/ProductListAdmin/ProductListAdmin';
import Login from './components/LogIn/LogIn';
import EditModal from './components/EditModal/Edit';
import Modal from './components/EditModal/Modal';
import ProductsListUser from './components/ProductListUser/ProductListUser';
import Cart from './components/Cart/Cart';
import AuthContextProvider from './context/AuthContext';
import ProductsContextProvider from './context/ProductsContext';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <PrivateRoute exact path ="/admin" component={Admin} />
            <Route exact path ="/" component={Home} />
            <Route exact path = "/signup" component={SignUp} />
            <Route exact path = "/payment" component={PaymentForm} />
            <Route exact path = "/addproduct" component={AddProduct} />
            <Route exact path = "/market" component={ProductListAdmin} />
            {/* <Route exact path="/details" component={Details} /> */}
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/edit/:id" component={EditModal} />
            <Route exact path="/modal" component={Modal} />
            <Route exact path="/shop" component={ProductsListUser} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default Routes;