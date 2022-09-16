import React from "react";
import "./SectionPicture.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import people_puff from "../../assets/people_puff.jpg";
import umbrellapeople from "../../assets/umbrellapeople.jpg";
import nap_sleep from "../../assets/nap_sleep.png";

export const SectionPicture = () => {
  return (
    <section className="container-picture">
      <div className="elements-figure">
        <p className="red-inst">INSTAGRAM</p>
        <p className="ht-picture">#ESPUFI</p>
        <figure className="images-total">
          <img src={image1} alt="imagen1" />
          <img src={image2} alt="imagen2" />
          <img src={image3} alt="image3" />
          <img src={people_puff} alt="people" />
          <img src={umbrellapeople} alt="umbrella" />
          <img src={nap_sleep} alt="nap" />
        </figure>
      </div>
    </section>
  );
};
