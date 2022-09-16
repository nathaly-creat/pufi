import React, { useEffect } from "react";
import "./Form.css";
import {useSelector, useDispatch} from 'react-redux'
import {setEmail} from '../../../src/actions/index.js'
import { useForm, ValidationError } from "@formspree/react";
import arrow_icon from "../../assets/arrow_icon.png";
import Swal from "sweetalert2";

const Form = () => {
  const emails = useSelector(state =>state.email);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEmail(emails))
  })

  const [state, handleSubmit] = useForm("xpznprye");
  if (state.succeeded) {
    return new Swal({
      title: "Correo Registrado",
      text: "Registro Confirmado.",
      confirmButtonText: "Aceptar",
    });
  }

  return (
    <section className="container-Form">
      <p className="newLetter">NEWLETTER</p>
      <p className="subscribe">SUSCRIBITE</p>
      <small>Y enterate de todas las novedades.</small>
      <form onSubmit={handleSubmit} className="input-group">
        <fieldset>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Ingresa tu email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <button
            className="btn-submit"
            type="submit"
            disabled={state.submitting}
          >
            <img src={arrow_icon} alt="arrow" />
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default Form;
