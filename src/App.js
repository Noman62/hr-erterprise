import React, { createContext, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProducts from "./components/AddProducts/AddProducts";
import Login from "./components/Login/Login";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>Name:{loggedInUser.email}</p>
      <Router>
      <Switch>
        <Route exact path="/">
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
        <Route path="/manageProduct">
          <ManageProduct />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
