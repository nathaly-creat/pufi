import React from "react";

import "./SectionCart.css";
import child_bag_mall from "../../assets/child_bag_mall.jpg";
import shopping_icon from "../../assets/shopping_icon.png";

export const SectionCart = () => {
  return (
    // style="max-width: 540px;"
    <section className="container-rain">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 position-relative">
            <button className="btn-shop-rain  position-absolute top-50 start-50">
              SHOP
            </button>
            <img
              src={child_bag_mall}
              className="img-fluid rounded-start imgRain"
              alt="umbrella"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-card">
              <img
                className="img_icon"
                src={shopping_icon}
                alt="umbrellaicon"
              />
              <h5 className="card-title">Pufi CART</h5>
              <hr />
              <p className="card-text">
                Adquiere con confianza nuestros productos.
              </p>
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