import React, { Fragment } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Formulario({ crearCita }) {

    const [cita, setCita] = useState({
        mascota: '',
        duenio: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setCita({
            ...cita, [e.target.name]: e.target.value
        })
    }

    const { mascota, duenio, fecha, hora, sintomas } = cita;

    const enviarCita = (e) => {
        e.preventDefault();

        if (mascota.trim() === '' || duenio.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true)
            return;
        }

        setError(false);

        crearCita({
            ...cita, id: Date.now()
        });

        setCita({
            mascota: '',
            duenio: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <Fragment>
            <h2>Crear cita</h2>
            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}
            <form onSubmit={enviarCita}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="duenio"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={handleChange}
                    value={duenio}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name='sintomas'
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button type='submit' className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
