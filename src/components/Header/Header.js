import React from 'react';
import styled from 'styled-components'
import LogoImg from '../../images/logo.png'
// import { Background, Margin } from '../../assets/styles/globalStyle'

const Header = () => {
  return (
    <>
      <Background>
        <Margin>
          <Logo src={LogoImg} />
        </Margin>
      </Background>
    </>
  );
};

const Background = styled.div`
  background: #2f2f2f;
  padding: 25px;
`;

const Margin = styled.div`
  max-width: 1300px;
  display: flex;
`;

const Logo = styled.img`
  margin-left: 50px;
  align-self: flex-start;
`;

export default Header;
