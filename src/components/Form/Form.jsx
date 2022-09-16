import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import people_puff from "../../assets/people_puff.jpg";
import umbrellapeople from "../../assets/umbrellapeople.jpg";
import nap_sleep from "../../assets/nap_sleep.png";
import Swal from "sweetalert2";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useForm, ValidationError } from "@formspree/react";

export const Form = () => {
  const [state, handleSubmit] = useForm("xpznprye");
  if (state.succeeded) {
    return new Swal({
      title: "Correo Registrado",
      text: "Hemos enviado un link a tu correo",
      confirmButtonText: "ok",
    });
  }
  return (
    <section className="container-Form">
      <div className="elements-figure">
        <p>INSTAGRAM</p>
        <h3>#ESPUFI</h3>
        <figure className="images-total">
          <img src={image1} alt="imagen1" />
          <img src={image2} alt="imagen2" />
          <img src={image3} alt="image3" />
          <img src={people_puff} alt="people" />
          <img src={umbrellapeople} alt="umbrella" />
          <img src={nap_sleep} alt="nap" />
        </figure>
        <p>NEWLETTER</p>
        <h3>SUSCRIBITE</h3>
        <small>Y enterate de todas las novedades</small>
        <form
          onSubmit={handleSubmit}
          className="input-group"
          method="POST"
          action="https://formspree.io/f/xpznprye"
        >
          <input
            type="text"
            className="input"
            placeholder="Ingresa tu email"
            autocomplete="off"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <button type="submit" disabled={state.submitting}>
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
      </button>
        </form>
      </div>
    </section>
  );
};

// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// function ContactForm() {
//   const [state, handleSubmit] = useForm("xpznprye");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email"
//         name="email"
//       />
//       <ValidationError
//         prefix="Email"
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError
//         prefix="Message"
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }
// function App() {
//   return (
//     <ContactForm />
//   );
// }
// export default App;
