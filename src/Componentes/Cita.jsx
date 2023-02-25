import React from 'react';
import { CitaContenedor, Campo, BotonEliminar } from '../Estilos/CitaStyled'

const Cita = ({ cita, eliminarCita }) => {
    return (
        <CitaContenedor>
            <Campo>Mascota: <span>{cita.mascota}</span></Campo>
            <Campo>Dueño: <span>{cita.duenio}</span></Campo>
            <Campo>Fecha: <span>{cita.fecha}</span></Campo>
            <Campo>Email: <span>{cita.mail}</span></Campo>
            <Campo>Síntomas: <span>{cita.sintomas}</span></Campo>
            <Campo><BotonEliminar onClick={() => eliminarCita(cita.id)}>Eliminar</BotonEliminar></Campo>
        </CitaContenedor>
    );
};

export default Cita;
