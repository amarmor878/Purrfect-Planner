import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Formulario from './Componentes/Formulario';
import ListaCitas from './Componentes/ListaCitas';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  margin: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function App() {
  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Array de citas
  const [citas, setCitas] = useState(citasIniciales);

  // useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  // Funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    setCitas([
      ...citas,
      cita
    ]);
  };

  // Funcion que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <div>
      <header>
        <h1>Administrador de pacientes</h1>
      </header>

      <Container>
        <Formulario crearCita={crearCita} />
        <ListaCitas citas={citas} eliminarCita={eliminarCita} />
      </Container>
    </div>
  );
}
