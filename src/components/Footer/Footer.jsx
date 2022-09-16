import React from "react";
import quality_icon from "../../assets/quality_icon.png";
import "./Footer.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

export const Footer = () => {
  return (
    <section className="container-footer">
      <div className="container-footer-info">
        <div className="nameLogo">Pufi</div>
        <div className="list-section">
          <ul className="list-design">
            <li>Pufi RAIN</li>
            <li>Pufi PUFF</li>
            <li>Pufi CART</li>
            <li>Pufi NAP</li>
          </ul>
        </div>
        <div className="contacts">
          <ul className="list-design">
            <li>CONTACTO</li>
            <li>AYUDA</li>
            <li>COMO COMPRAR</li>
            <li>TERMINOS Y CONDICIONES</li>
          </ul>
        </div>
        <div className="quaranty">
          <ul className="list-design">
            <li>COMPRA 100% SEGURA</li>
            <div className="quarantysectio2">
              <img src={quality_icon} alt="logoCalidad" />
              <p>Compra con la garantia de PUFI </p>
            </div>
          </ul>
        </div>
        <div className="icons-rrss">
          <p>SEGUINOS EN</p>
          <figure>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </figure>
        </div>
      </div>
      <div>
        <hr className="hr-footer" />
        <p className="footer-copyright">
          PUFI Copyright 2017 - Todos los derechos reservados
        </p>
      </div>
    </section>
  );
};
