import styled from 'styled-components';

export const CitaContenedor = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const Campo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0;
`;

export const ValorCampo = styled.span`
  font-size: 1.1rem;
`;

export const BotonEliminar = styled.button`
  font-weight: bold;
  background-color: #dc3545;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  transition: background-color .3s ease;
  border-radius: 0px 0px 18px 18px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;
