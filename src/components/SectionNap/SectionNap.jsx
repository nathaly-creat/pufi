import React from "react";
import "./SectionNap.css";
import sleep_icon from "../../assets/sleep_icon.png";
import nap_sleep from "../../assets/nap_sleep.png";

export const SectionNap = () => {
  return (
    <section className="container-puff">
      <div className="card mb-3">
        <div className="card-body text-card">
          <img className="img_icon" src={sleep_icon} alt="imageboxPuff" />
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
          <img className="imgPuff" src={nap_sleep} alt="puff" />
          <button className="btn-shop-rain  position-absolute top-50 start-50">
            SHOP
          </button>
        </div>
      </div>
    </section>
  );
};
