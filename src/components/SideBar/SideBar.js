import React from 'react';
import { Link } from 'react-router-dom';
import Panel from '../../pages/Panel/Panel';
// import { Background, Margin } from '../../assets/styles/globalStyle';
import { Aside, List, Item } from './styles';

const SideBar = () => {
  return (
    <Aside>
      <List>
        <Item>
          <Link to='/'>Painel</Link>
        </Item>
        <Item>
          <Link to='estoque'>Estoque</Link>
        </Item>
        <Item>Vendas</Item>
        <Item>Fluxo de Caixa</Item>
        <Item>Despesas</Item>
      </List>
    </Aside>
  );
};

export default SideBar;
