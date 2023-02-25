import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Formulario from './Componentes/Formulario';
import ListaCitas from './Componentes/ListaCitas';
import LogoContainer from './Estilos/LogoContainerStyled';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  margin: 20px;

  @media (max-width: 1135px) {
    grid-template-columns: 1fr;
    // Cambia esta línea
    grid-auto-rows: minmax(100px, auto);
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
        <LogoContainer>
          <img src="https://img.icons8.com/cotton/64/null/cat--v2.png" alt='Gato gris' />
          <h1>Purrfect Planner</h1>
        </LogoContainer>
      </header>
      <Container>
        <Formulario crearCita={crearCita} />
        <ListaCitas citas={citas} eliminarCita={eliminarCita} />
      </Container>
    </div>
  );
}
