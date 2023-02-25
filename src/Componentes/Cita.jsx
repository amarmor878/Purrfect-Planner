import React from 'react';
import { CitaContenedor, ContenedorInformacion, Campo, ValorCampo, BotonEliminar } from '../Estilos/CitaStyled'

const Cita = ({ cita, eliminarCita }) => {
    return (
        <CitaContenedor>
            <ContenedorInformacion>
                <Campo>Mascota: </Campo>
                <ValorCampo>{cita.mascota}</ValorCampo>
                <Campo>Dueño: </Campo>
                <ValorCampo>{cita.duenio}</ValorCampo>
                <Campo>Fecha: </Campo>
                <ValorCampo>{cita.fecha}</ValorCampo>
                <Campo>Email: </Campo>
                <ValorCampo>{cita.mail}</ValorCampo>
                <Campo>Síntomas: </Campo>
                <ValorCampo>{cita.sintomas}</ValorCampo>
            </ContenedorInformacion>
            <BotonEliminar onClick={() => eliminarCita(cita.id)}>Eliminar</BotonEliminar>
        </CitaContenedor>
    );
};

export default Cita;
