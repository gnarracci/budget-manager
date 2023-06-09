import React, { Fragment, useState } from "react";
import Error from './Error';
import PropTypes from 'prop-types';

export default function Pregunta({guardarPresupuesto, guardarRestante, actualizarPregunta}) {

    // Definir el State
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);
    
    // Submit para definir el presupuesto
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
      actualizarPregunta(false);
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

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired
}