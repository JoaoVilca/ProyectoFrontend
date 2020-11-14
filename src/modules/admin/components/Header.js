import React from "react";
import "./../../../css/header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand pl-5" href="!#">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                to={"/tienda/home"}
                exact
                className="nav-link pl-5"
                activeClassName="active"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to={"!#"}
                activeClassName="active"
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Productos
              </NavLink>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  class="dropdown-item"
                  to={"/tienda/productos"}
                  className="nav-link"
                  activeClassName="active"
                >
                  Todos los productos
                </NavLink>
                <NavLink
                  class="dropdown-item"
                  to={"/tienda/categorias"}
                  className="nav-link"
                  activeClassName="active"
                >
                  Categorias
                </NavLink>
                <NavLink
                  class="dropdown-item"
                  to={"/tienda/tendencia"}
                  className="nav-link"
                  // activeClassName="active"
                >
                  Tendencia
                </NavLink>
                <NavLink
                  class="dropdown-item"
                  to={"/tienda/nuevos"}
                  className="nav-link"
                  // activeClassName="active"
                >
                  Recien llegado
                </NavLink>
              </div>
            </li>
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
