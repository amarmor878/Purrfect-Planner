import React, { useState } from 'react';
import FormularioWrapper from '../Estilos/FormuStyled'

const Formulario = ({ crearCita }) => {

    const [cita, setCita] = useState({
        mascota: '',
        duenio: '',
        fecha: '',
        mail: '',
        sintomas: ''
    });

    const [error, setError] = useState(false);

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    const { mascota, duenio, fecha, mail, sintomas } = cita;

    const enviarCita = e => {
        e.preventDefault();

        if (mascota.trim() === '' || duenio.trim() === '' || fecha.trim() === '' || mail.trim() === '' || sintomas.trim() === '') {
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
            mail: '',
            sintomas: ''
        });
    };

    return (
        <FormularioWrapper>
            <h2>Seguimiento del paciente</h2>
            <h3>Añade Pacientes y <span>Administralos</span></h3>
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
                <label>Email</label>
                <input
                    type="email"
                    name="mail"
                    placeholder="Correo del dueño"
                    onChange={handleChange}
                    value={mail}
                />
                <label>Sintomas</label>
                <textarea
                    name='sintomas'
                    placeholder="Sintomas que presenta el animal"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button type='submit'>Agregar Cita</button>
            </form>
        </FormularioWrapper>
    );
};

export default Formulario;
