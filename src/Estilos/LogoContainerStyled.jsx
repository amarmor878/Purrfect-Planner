import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1 {
    font-size: 2.3rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-top: 40px;
  }

  img {
    height: 4rem;
  }
`;

export const ContainerApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  margin: 20px;

  @media (max-width: 1135px) {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(100px, auto);
  }
`;