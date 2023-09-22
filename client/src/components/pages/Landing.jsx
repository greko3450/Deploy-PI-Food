import React from "react";
import { NavLink } from "react-router-dom";
import landingPage from "./Landing.module.css"

class Landing extends React.Component {

  render() {
    return (
      <div className={landingPage.container}>
        <NavLink to={"/recipes"} rel="noopener noreferrer">
          <button className={landingPage.boton}>Home</button>
        </NavLink>
        <div className={landingPage.content}>
          <h1>*************PI food*************</h1>
          <p>n los patrones lingüísticos y semánticos de las búsquedas de los usuarios. De esta manera, la página web será capaz de proporcionar sugerencias precisas y personalizadas de recetas que satisfagan las necesidades y preferencias del usuario."</p>
        </div>
      </div>
    );
  }
}

export default Landing;