import React from 'react';
import styled from 'styled-components';
import OrangeBtn from '../../components/OrangeBtn/OrangeBtn';
import TopInfos from '../../components/TopInfos/TopInfos';
import { Wrapper } from '../../assets/styles/globalStyle';
import InfosContainer from '../../components/InfosContainer/InfosContainer';
import GraphicContainer from '../../components/GraphicContainer/GraphicContainer';

const Panel = () => {
  return (
    <Wrapper>
      <HeaderPainel>
        <OrangeBtn add="Venda"/>
        <TopInfos />
      </HeaderPainel>
      <Main>
        <InfosContainer />
        <GraphicContainer />
      </Main>
    </Wrapper>
  );
};

const HeaderPainel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default Panel;
