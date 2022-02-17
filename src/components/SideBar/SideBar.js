import React from 'react';
import styled from 'styled-components';
// import { Background, Margin } from '../../assets/styles/globalStyle';

const LeftNav = () => {
  return (
    <>
      <Aside>
        <List>
          <Li>Painel</Li>
          <Li>Estoque</Li>
          <Li>Vendas</Li>
          <Li>Fluxo de Caixa</Li>
          <Li>Despesas</Li>
        </List>
      </Aside>
    </>
  );
};

const Aside = styled.aside`
  background: #2f2f2f;
  width: fit-content;
  padding: 50px;
`;

const List = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Li = styled.li`
  color: #e0e9e3;
  margin-bottom: 40px;
  padding: 10px 5px;
  list-style: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
  background: #25e485;
}
`;

export default LeftNav;
