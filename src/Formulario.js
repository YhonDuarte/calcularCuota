import { Fragment, useState } from "react";
import { calcularCuota } from "./helpers";

const Formulario = (prosp) => {
  const { cantidad, setCantidad, plazo, setPlazo, setTotal } = prosp;
  const [error, setError] = useState(false);
  const leerCantidad = (e) => {
    setCantidad(parseInt(e.target.value));
  };
  const leerPlazo = (e) => {
    setPlazo(parseInt(e.target.value));
  };

  const calcularPrestano = (e) => {
    e.preventDefault();
    if (cantidad === 0 || plazo === "") {
      setError(true);
      return;
    }

    setError(false);

    const total = calcularCuota(cantidad, plazo);

    setTotal(total);
  };

  return (
    <Fragment>
      <form onSubmit={calcularPrestano}>
        <div>{cantidad}</div>
        <div>{plazo}</div>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={leerCantidad}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select className="u-full-width" onChange={leerPlazo}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {error ? (
        <p className="error">todos los campos son obligatorios </p>
      ) : null}
    </Fragment>
  );
};

export default Formulario;
