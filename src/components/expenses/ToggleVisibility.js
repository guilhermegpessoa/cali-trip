import React, { useState } from "react";
import './ToggleVisibility.css';

export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Esconder Gastos" : "Mostrar Gastos";

  return (
    <div className="component-container">
      <button className="fill" onClick={toggleShow}>{buttonText}</button>
      {show && children}
    </div>
  );
}