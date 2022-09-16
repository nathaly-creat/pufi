import React from "react";
import "./SectionPuff.css";
import puff_icon from "../../assets/puff_icon.png";
import people_puff from "../../assets/people_puff.jpg";

export const SectionPuff = () => {
  return (
    <section className="container-puff">
      <div className="card mb-3">
        <div className="card-body text-card">
          <img className="img_icon" src={puff_icon} alt="imageboxPuff" />
          <h5 className="card-title">Pufi PUFF</h5>
          <hr />
          <p className="card-text">
            Comodida y versatilidad lo tienes con Pufi.{" "}
          </p>
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Ver más</span>
          </button>
        </div>
        <div className="container-imagPuff">
          <img className="imgPuff" src={people_puff} alt="puff" />
          <button className="btn-shop-rain  position-absolute top-50 start-50">
            SHOP
          </button>
        </div>
      </div>
    </section>
  );
};
