import React, { useState } from "react";
const Formulario = () => {

    const [ nombre, guardarNombre ] = useState('');


  return (
    <form>
      <h2>Agrega tus Gastos Aqui</h2>
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="ej. Transporte"
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input type="number" 
        className="u-full-width" 
        placeholder="ej. 300" 
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

export default Formulario;
