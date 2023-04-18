import React, { Fragment } from "react";

export default function Pregunta() {
  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>
      <form>
        <input type="number"
        className="u-full-width"
        placeholder="Coloca tu Presupuesto"
        />
        <input type="submit" 
        className="u-full-width button-primary"
        value="Definir Presupuesto" 
        />
      </form>
    </Fragment>
  );
}
