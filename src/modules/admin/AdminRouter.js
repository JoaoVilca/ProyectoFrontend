import React from "react";
// import { Route, Router, Switch } from "react-router-dom";
import AdminDashboard from "./screens/dashboard/AdminDashboard";
import Home from "./screens/home/Home";
import AdminProductos from "./screens/productos/AdminProductos";
import Categorias from "./screens/productos/categorias/Categorias";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header2 from "./components/Header2";
import Header from "./components/Header";

const AdminRouter = () => {
  return (
    <Router>
      <Header2/>
      <Header/>
      <Switch>
        <Route path={"/admin/productos"} component={AdminProductos}></Route>
        <Route
          path={"/admin/productos/categorias"}
          component={Categorias}
        ></Route>
        <Route path={"/admin/home"} component={AdminDashboard}></Route>
        <Route path={"/admin"} component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default AdminRouter;
