import React from "react";
import "./SectionUmbrella.css";
import umbrellapeople from "../../assets/umbrellapeople.jpg";
import umbrella_icon from "../../assets/umbrella_icon.png";

export const SectionUmbrella = () => {
  return (
    <section className="container-rain">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 position-relative">
            <img
              src={umbrellapeople}
              className="img-fluid rounded-start imgRain"
              alt="umbrella"
            />
            <button className="btn-shop-rain  position-absolute top-50 start-50">
              SHOP
            </button>
          </div>
          <div className="col-md-8">
            <div className="card-body text-card">
              <img
                className="img_icon"
                src={umbrella_icon}
                alt="umbrellaicon"
              />
              <h5 className="card-title">Pufi RAIN</h5>
              <hr />
              <p className="card-text">
                No pierdas tu estilo en días de lluvia.
              </p>
              {/* <p className="card-text">
                <p className="text-muted"> VER MAS </p>
              </p> */}
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Ver más</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
