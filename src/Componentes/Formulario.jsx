import React, { useState } from 'react';
import { FormularioWrapper, LabelForm, InputForm, TextAreaForm, BotonForm } from '../Estilos/FormuStyled'

const Formulario = ({ crearCita }) => {

    // funcion para administrar la información de la cita
    const [cita, setCita] = useState({
        mascota: '',
        duenio: '',
        fecha: '',
        mail: '',
        sintomas: ''
    });

    // funcion para indicar si hay algún error en el formulario
    const [error, setError] = useState(false);

    // Función para actualizar la información de la cita al escribir en los campos del formulario
    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    // Desestructuración del estado local de la cita
    const { mascota, duenio, fecha, mail, sintomas } = cita;

    // Función para enviar la información de la cita al presionar el botón de "Enviar"
    const enviarCita = e => {
        e.preventDefault();

        // Validación de campos requeridos
        if (mascota.trim() === '' || duenio.trim() === '' || fecha.trim() === '' || mail.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // Asignación de id con la fecha y hora actual
        cita.id = Date.now();

        // Llamada a la función crearCita con la información de la cita
        crearCita(cita);

        // Reinicio del estado local de la cita a valores vacíos
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
                <LabelForm>Nombre Mascota</LabelForm>
                <InputForm
                    type="text"
                    name="mascota"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <LabelForm>Nombre Dueño</LabelForm>
                <InputForm
                    type="text"
                    name="duenio"
                    placeholder="Nombre Dueño"
                    onChange={handleChange}
                    value={duenio}
                />
                <LabelForm>Fecha</LabelForm>
                <InputForm
                    type="date"
                    name="fecha"
                    onChange={handleChange}
                    value={fecha}
                />
                <LabelForm>Email</LabelForm>
                <InputForm
                    type="email"
                    name="mail"
                    placeholder="Correo del dueño"
                    onChange={handleChange}
                    value={mail}
                />
                <LabelForm>Sintomas</LabelForm>
                <TextAreaForm
                    name='sintomas'
                    placeholder="Sintomas que presenta el animal"
                    onChange={handleChange}
                    value={sintomas}
                ></TextAreaForm>
                <BotonForm type='submit'>Agregar Cita</BotonForm>
            </form>
        </FormularioWrapper>
    );
};

export default Formulario;
