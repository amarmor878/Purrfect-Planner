import styled from 'styled-components';

export const CitaContenedor = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 15px; /* cambia aquí el valor de padding */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContenedorInformacion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Campo = styled.p`
  font-size: 1.2rem; /* cambia aquí el valor de font-size */
  margin-bottom: 0;
  font-weight: bold;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2rem; /* cambia aquí el valor de line-height */
`;

export const ValorCampo = styled.span`
  font-size: 1rem; /* cambia aquí el valor de font-size */
  font-weight: lighter;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.3rem; /* cambia aquí el valor de line-height */
`;

export const BotonEliminar = styled.button`
  font-weight: bold;
  background-color: #dc3545;
  border: none;
  color: #fff;
  font-size: 1rem;
  padding: 8px 12px;
  align-self: flex-end;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    background-color: #c82333;
  }
`;
