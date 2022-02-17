import React from 'react';
import styled from 'styled-components';

const TopInfos = () => {
  return (
    <Wrapper>
      <Li>
        <Cash>R$ 0.000,00</Cash>
        <Desc>vendidos hoje</Desc>
      </Li>
      <Li>
        <Cash>R$ 0.000,00</Cash>
        <Desc>lucro hoje</Desc>
      </Li>
      <Li>
        <Cash>R$ 0.000,00</Cash>
        <Desc>pagar hoje</Desc>
      </Li>
      <Li>
        <Cash>R$ 0.000,00</Cash>
        <Desc>lucro do mês</Desc>
      </Li>
      <Li>
        <Cash>R$ 0.000,00</Cash>
        <Desc>receita do mês</Desc>
      </Li>
      <Li>
        <Cash>R$ 0.000,00</Cash>
        <Desc>despesas do mês</Desc>
      </Li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  list-style: none;
`;

const Cash = styled.span`
  font-weight: bold;
`;

const Desc = styled.p`
  margin: 0;
`;

export default TopInfos;
