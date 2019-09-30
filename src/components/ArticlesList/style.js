import styled from 'styled-components';

export const ContainerBox = styled.div`

`;

/* Configuração da div onde se localiza os botões superiores */
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  flex-wrap: wrap;
`;

/* Configuração da div que traz os dados da api */
export const ContainerList = styled.div`
  max-width: 800px;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;

  div {
    border: 1px solid black;
    border-left: none;
    border-right: none;
    border-bottom: none;
    padding: 5px 0 10px 0;
    width: auto;
    min-height: 0px;

    :hover {
      background-color: #eeeeee;
    }

    img {
      width: 80px;
      height: 60px;
      flex: 0 auto;
      float: left;
      margin: 10px 10px 0 5px;
    }

    article {
      font-size: 15px;
      line-height: 1.5em;
      margin-left: 1rem;
      flex-wrap: nowrap;

      @media (max-width: 425px){
        font-size: 11px !important;
      }
    }

    strong {
      color: #333333;
    }

    p {
      color: #404040;
      font-weight: 600;
    }

    small {
      color: #707070;
    }

    span {
      color: #ff6a20;
    }

    a{
      color: #404040;
    }
  }
  button {
    width: auto;
  }
`;
