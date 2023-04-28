import React, { Fragment, useState } from "react";
import Error from './Error';

export default function Pregunta({guardarPresupuesto, guardarRestante}) {

    // Definir el State
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);
    
    // Submit para defi ir el presupuesto
    const agregarPresupuesto = e => {
      e.preventDefault();
      // Validar
      if (cantidad < 1 || isNaN(cantidad)) {
        guardarError(true);
        return;
      }

      // Si se pasa la validacion
      guardarError(false);
      guardarPresupuesto(cantidad);
      guardarRestante(cantidad);
    }

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>
      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input type="number"
        className="u-full-width"
        placeholder="Coloca tu Presupuesto"
        onChange={e => {
          guardarCantidad(parseInt(e.target.value, 10));
        }}
        />
        <input type="submit" 
        className="u-full-width button-primary"
        value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
}
