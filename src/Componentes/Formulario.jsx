import React, { useState, useEffect } from 'react';
import { FormularioWrapper, LabelForm, InputForm, TextAreaForm, BotonForm } from '../Estilos/FormuStyled'

const Formulario = ({ crearCita }) => {
    //Obtenemos las citas del localStorage o las inicializamos si no las hay.
    const citasIniciales = JSON.parse(localStorage.getItem('citas')) || [];
    //Estado para manejar la informacion de las citas
    const [cita, setCita] = useState({ mascota: '', duenio: '', fecha: '', mail: '', sintomas: '' });
    //Estado para manejar las citas 
    const [citas, setCitas] = useState(citasIniciales);
    //Estado para manejar los errores
    const [error, setError] = useState(false);

    //Funcion que actualiza la infromación de la cita al rellenar el formulario (ECMASCRIPT 6 --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    const handleChange = e => setCita({ ...cita, [e.target.name]: e.target.value });
    //Destructuración del estado local de la cita (ECMASCRIPT 6 --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    const { mascota, duenio, fecha, mail, sintomas } = cita;

    //Funcion que se ejecuta cuando el usuario envia el formulario
    const enviarCita = e => {
        e.preventDefault();
        //Validamos que todos los campos esten llenos
        if (mascota.trim() === '' || duenio.trim() === '' || fecha.trim() === '' || mail.trim() === '' || sintomas.trim() === '') { setError(true); return; }
        setError(false);
        //Asignamos en el id la fecha y hora actual.
        cita.id = Date.now();
        //Agrega la cita a la lista de citas
        setCitas([...citas, cita]);
        //Llama a la funcion crearCita con la informacion de la cita
        crearCita(cita);
        //Reinicia el estado de la cita
        setCita({ mascota: '', duenio: '', fecha: '', mail: '', sintomas: '' });
    };

    //Almacenamos las citas en el localStorage
    useEffect(() => localStorage.setItem('citas', JSON.stringify(citas)), [citas]);

    return (
        <FormularioWrapper>
            <h2>Seguimiento del paciente</h2>
            <h3>Añade Pacientes y <span>Administralos</span></h3>
            {error && <p>Todos los campos son obligatorios</p>}
            <form onSubmit={enviarCita}>
                <LabelForm>Nombre Mascota</LabelForm>
                <InputForm type="text" name="mascota" placeholder="Nombre Mascota" value={cita.mascota} onChange={handleChange} />
                <LabelForm>Nombre Dueño</LabelForm>
                <InputForm type="text" name="duenio" placeholder="Nombre Dueño" value={cita.duenio} onChange={handleChange} />
                <LabelForm>Fecha</LabelForm>
                <InputForm type="date" name="fecha" value={cita.fecha} onChange={handleChange} />
                <LabelForm>Email</LabelForm>
                <InputForm type="email" name="mail" placeholder="Correo del dueño" value={cita.mail} onChange={handleChange} />
                <LabelForm>Sintomas</LabelForm>
                <TextAreaForm name="sintomas" placeholder="Sintomas que presenta el animal" value={cita.sintomas} onChange={handleChange}></TextAreaForm>
                <BotonForm type="submit">Agregar Cita</BotonForm>
            </form>
        </FormularioWrapper>
    );
};

export default Formulario;
