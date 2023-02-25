import React from 'react';
import Cita from './Cita';
import { ListaContenedor } from '../Estilos/ListaStyled';

export default function ListaCitas({ citas, eliminarCita }) {
    return (
        <ListaContenedor>
            <h2>Listado de Pacientes</h2>
            <h3>Administrar tus <span>Pacientes y Citas</span></h3>
            {citas.length === 0
                ? <p>No hay citas</p>
                : citas.map((cita) => (
                    <Cita
                        key={cita.id}
                        cita={cita}
                        eliminarCita={eliminarCita}
                    />
                ))
            }
        </ListaContenedor>
    );
}
