import React, { useState } from "react";
import  Error from './Error';
import shortid from "shortid";
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    // Cuando el usuario agregaun gasto
    const agregarGasto = e => {
      e.preventDefault();

      // Validar
      if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
        guardarError(true);
        return;
      }
      guardarError(false);
      
      // Construir el Gasto
      const gasto = {
        nombre,
        cantidad,
        id: shortid.generate()
      }

      // Pasar el Gasto al Componente Principal
      guardarGasto(gasto);
      guardarCrearGasto(true);

      // Resetear el form
      guardarNombre('');
      guardarCantidad(0);

    }

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus Gastos Aqui</h2>
      {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="ej. Transporte"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input type="number" 
        className="u-full-width" 
        placeholder="ej. 300" 
        value={cantidad}
        onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        value="Agregar Gasto"
        className="button-primary u-full-width"
      />
    </form>
  );
};

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
