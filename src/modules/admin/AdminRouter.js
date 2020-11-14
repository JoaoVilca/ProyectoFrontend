import React from "react";
// import { Route, Router, Switch } from "react-router-dom";
import AdminDashboard from "./screens/dashboard/AdminDashboard";
import Home from "./screens/home/Home";
import AdminProductos from "./screens/productos/AdminProductos";
import Categorias from "./screens/productos/categorias/Categorias";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header2 from "./components/Header2";
import Header from "./components/Header";
import Tendencia from "./screens/productos/tendencia/Tendencia";

const AdminRouter = () => {
  return (
    <Router>
      <Header2/>
      <Header/>
      <Switch>
        <Route path={"/tienda/productos"} component={AdminProductos}/>
        <Route path={"/tienda/categorias"} component={Categorias}/>
        <Route path={"/tienda/home"} component={AdminDashboard}/>
        <Route path={"/tienda/tendencia"} component={Tendencia}/>
        <Route path={"/tienda"} component={AdminDashboard}/>
      </Switch>
    </Router>
  );
};

export default AdminRouter;
