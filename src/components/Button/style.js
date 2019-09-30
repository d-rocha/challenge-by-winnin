import styled from "styled-components";

/* Definindo os estilos do botão */
export const ButtonStyled = styled.button `
  padding: 7px 50px 7px 50px;
  margin: 15px 2px;
  border: none;
  border-radius: 5px;
  background-color: #666666;

  color: #fff;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    background-color: #ff5500;
    transition-duration: 0.7s;
  }
`;
