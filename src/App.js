import React from "react";
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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/admin">
          <AddProducts />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/manageProduct">
          <ManageProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
