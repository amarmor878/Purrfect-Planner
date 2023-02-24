import React, { Fragment } from "react";
import { useState, useEffect } from "react";

import Cita from "./Componentes/Cita.jsx";
import Formulario from "./Componentes/Formulario.jsx";

function App() {
  let listaCitas = JSON.parse(localStorage.getItem("citas"));
  if (!listaCitas) {
    listaCitas = [];
  }

  const [citas, setCitas] = useState(listaCitas);

  useEffect(() => {
    if (listaCitas) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, listaCitas]);

  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  const mensaje =
    citas.length === 0 ? "No hay citas" : "Administrar tus citas pendientes";
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{mensaje}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
