import React from 'react'
import { 
  Container, 
  Title, 
  List, 
  Item, 
  ItemTitle, 
  Client, 
  Buy, 
  Page, 
  PrevPage, 
  NextPage, 
  AddClient 
} from './styles';

const InfosContainer = () => {
  return (
    <Container>
      <Title>Vendas do dia</Title>
      <List>
        <Item>
          <ItemTitle>Cliente</ItemTitle>
          <ItemTitle>Compra</ItemTitle>
        </Item>
        <Item>
          <Client>Eduardo w</Client>
          <Buy>R$ 32,59</Buy>
        </Item>
        <Item>
          <Client>Eduardo w</Client>
          <Buy>R$ 32,59</Buy>
        </Item>
        <Item>
          <Client>Eduardo w</Client>
          <Buy>R$ 32,59</Buy>
        </Item>
        <Item>
          <Client>Eduardo w</Client>
          <Buy>R$ 32,59</Buy>
        </Item>
        <Item>
          <Client>Eduardo w</Client>
          <Buy>R$ 32,59</Buy>
        </Item>
        <Item>
          <Client>Eduardo w</Client>
          <Buy>R$ 32,59</Buy>
        </Item>
      </List>
      <Page>
        <PrevPage>
          - Pagina anterior
        </PrevPage>
        <NextPage>
          Proxima página -
        </NextPage>
      </Page>
      <AddClient>
        Adicionar Cliente -
      </AddClient>
    </Container>
  )
}

export default InfosContainer;