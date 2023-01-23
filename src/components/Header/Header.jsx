import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Khareedo Store</h1>
                <p>Since 1990</p>
              </div>
            </div>
            <div className="navigation">
              <ul className="menu">
                <li className="nav__item">
                  <NavLink to={"/home"}>Home</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to={"/shop"}>Shop</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to={"/cart"}>Cart</NavLink>
                </li>
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
              </span>
              <img src={userIcon} alt="userIcon" />
            </div>
            <div className="mobile_menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
