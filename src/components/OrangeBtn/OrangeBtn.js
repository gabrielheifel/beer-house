import React from 'react';
import styled from 'styled-components';

const OrangeBtn = ({ name }) => {
  return (
    <Btn>+ Adicionar {name}</Btn>
  );
};

const Btn = styled.button`
  background: greenyellow;
  font-size: 15px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #797979;
  cursor: pointer;
`;

export default OrangeBtn;
