import React, { useState } from 'react';
import FormularioWrapper from '../Estilos/FormuStyled'

const Formulario = ({ crearCita }) => {

    const [cita, setCita] = useState({
        mascota: '',
        duenio: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, setError] = useState(false);

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    const { mascota, duenio, fecha, hora, sintomas } = cita;

    const enviarCita = e => {
        e.preventDefault();

        if (mascota.trim() === '' || duenio.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        cita.id = Date.now();

        crearCita(cita);

        setCita({
            mascota: '',
            duenio: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    };

    return (
        <FormularioWrapper>
            <h2>Crear cita</h2>
            {error ? <p>Todos los campos son obligatorios</p> : null}
            <form onSubmit={enviarCita}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="duenio"
                    placeholder="Nombre Dueño"
                    onChange={handleChange}
                    value={duenio}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    name='sintomas'
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button type='submit'>Agregar Cita</button>
            </form>
        </FormularioWrapper>
    );
};

export default Formulario;
