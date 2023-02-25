import styled from 'styled-components'

const FormularioWrapper = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0.5px 0.5px 5px;
  background-color: whitesmoke;

  h2, h3 {
    margin-bottom: 1rem;
    text-align: center;
  }

  h3 span{
    color: #008CBA;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  input[type='text'],
  input[type='date'],
  input[type='email'],
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1.2rem;
  }

  button[type='submit'] {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-top: 1rem;
    background-color: #008CBA;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      background-color: #00688B;
    }
  }

  p {
    margin-top: 1rem;
    color: red;
    font-size: 1.2rem;
    font-weight: bold;
  }
`
export default FormularioWrapper;
