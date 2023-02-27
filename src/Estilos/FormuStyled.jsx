import styled from 'styled-components'

export const FormularioWrapper = styled.div`
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
  
  p {
    margin-top: 1rem;
    color: red;
    font-size: 1.2rem;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin-top: 20px;
  }
`;

export const LabelForm = styled.label`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const InputForm = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  width: 100%;
`;

export const TextAreaForm = styled.textarea`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  width: 100%;
`;

export const BotonForm = styled.button`
  background-color: #3f51b5;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #303f9f;
  }
`;