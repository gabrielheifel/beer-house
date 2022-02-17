import React from 'react';
import styled from 'styled-components';
import OrangeBtn from '../../components/OrangeBtn/OrangeBtn';
import TopInfos from '../../components/TopInfos/TopInfos';

const Compras1 = () => {
  return (
    <Wrapper>
      <HeaderPainel>
        <OrangeBtn name="Conta"/>
        <TopInfos />
      </HeaderPainel>
    </Wrapper>
    
  );
};

const Wrapper = styled.div`
  flex: 1;
  margin-top: 20px;
`;

const HeaderPainel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default Compras1;
