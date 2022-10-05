import React, { useState } from "react";
import Header from "./Header";
import Formulario from "./Formulario";

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <Header titulo="cotizador de prestamos" />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          total={total}
          setTotal={setTotal}
        />
        <h1> el total a pagar es = $ {total}</h1>
      </div>
      <h1> el total a pagar es = $ {total}</h1>
    </div>
  );
}

export default App;
