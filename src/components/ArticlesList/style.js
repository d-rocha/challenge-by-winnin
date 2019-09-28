import styled from 'styled-components';

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerList = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  margin: 20px auto 0;
  padding-bottom: 5px;
  border-bottom: 1px solid #333;

  ul {
    list-style: none;

    li {
      h2 {
        color: #333333;
      }

      small {
        color: #707070;
      }

      span {
        color: #ff6a20;
      }
    }
  }
`;
