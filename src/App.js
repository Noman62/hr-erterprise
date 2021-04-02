import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddProducts from "./components/AddProducts/AddProducts";
import Login from "./components/Login/Login";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";
import OrderDetails from "./components/OrderDetails/OrderDetails";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/admin">
            <AddProducts />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkOut/:productId">
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path="/orderDetail/:orderId">
            <OrderDetails />
          </PrivateRoute>
          <Route path="/order">
            <Orders/>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
