import React from "react";
import "./Slice.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

export const Slice = () => {
  return (
    <section className="container-slice">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={image1} className="d-block w-100 img-slice" alt="relax" />
            <div className="carousel-caption d-none d-md-block prueba">
              <p className="text-slice">ESTÁR CÓMODO NUNCA FUE TAN FÁCIL.</p>
              <button className="btn-shop">SHOP</button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={image2} className="d-block w-100 img-slice" alt="relax" />
            <div className="carousel-caption d-none d-md-block">
              <p className="text-slice">ESTÁR CÓMODO NUNCA FUE TAN FÁCIL.</p>
              <button className="btn-shop">SHOP</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100 img-slice" alt="relax" />
            <div className="carousel-caption d-none d-md-block">
              <p className="text-slice">ESTÁR CÓMODO NUNCA FUE TAN FÁCIL.</p>
              <button className="btn-shop">SHOP</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
