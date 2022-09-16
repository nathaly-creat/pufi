import React from "react";
import "./SectionNap.css";
import sleep_icon from "../../assets/sleep_icon.png";
import nap_sleep from "../../assets/nap_sleep.png";

export const SectionNap = () => {
  return (
    <section className="container-puff">
      {/* <div class="containerboxtwo" id="sectionPuff"> */}
      <div className="card mb-3">
      {/* <div className="row g-0">
          <div className="col-md-4 position-relative"> */}
      <div className="card-body text-card">
          <img className="img_icon" src={sleep_icon} alt="imageboxPuff" />
          <h5 className="card-title">Pufi PUFF</h5>
          <hr />
          <p className="card-text">Comodida y versatilidad lo tienes con Pufi. </p>
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Ver más</span>
          </button>
        </div>
        <div class="container-imagPuff">
          <img className='imgPuff' src={nap_sleep} alt="puff" />
        </div>
      </div>
      {/* </div></div> */}
    </section>
  );
};
