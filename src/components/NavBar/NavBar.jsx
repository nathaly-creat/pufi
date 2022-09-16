import React from "react";
import puf from "../../assets/puf.png";
import umbrella from "../../assets/umbrella.png";
import nap from "../../assets/nap.png";
import bolsa from "../../assets/bolsa.png";
// import { Link } from "react-router-dom";
import { Col } from "antd";
import "./Navbar.css";

export const NavBar = () => {
  return (
    <>
      <Col span={10} offset={4}>
        <nav className="nav-bar navigation container-navbar">
          <div className="container-logo">
            <p className="nameLogo">Pufi</p>
            {/* <Link to="/" className="nameLogo">
            Pufi
          </Link> */}
          </div>
          <section className="menu">
            <div className="menu-nav cont1">
              <img src={puf} alt="imgPufNav" />
              <a href="#sectPuff">PUFI PUFF</a>
            </div>
            <div className="menu-nav cont2">
              <img src={umbrella} alt="imgUmbrellaNav" />
              <a href="#sectUmbrella">PUFI RAIN</a>
            </div>
            <div className="menu-nav cont3">
              <img src={bolsa} alt="imgPufNav" />
              <a href="#sectPuff">PUFI CART</a>
            </div>
            <div className="menu-nav cont4">
              <img src={nap} alt="imgPufNav" />
              <a href="#sectPuff">PUFI NAP</a>
            </div>
          </section>
          <div className="menu-cart-select">
            <select className="form-select ">
              <option value="true" selected>
                Mi cuenta
              </option>
              <option value="true">One</option>
            </select>
            <p>Mi Compra</p>
          </div>
        </nav>
      </Col>
    </>
  );
};
