import React from 'react';
import LogoImg from '../../images/logo.png'
import { 
  Background, 
  Container, 
  Logo, 
  Wrapper, 
  LoginInputs, 
  Label, 
  Input, 
  Button, 
  Span
} from './styles';

const Login = () => {
  return (
    <>
      <Background>
        <Container>
          <Logo src={LogoImg} alt="beer house" />
          <Wrapper>
            <LoginInputs>
              <Label htmlFor="username">
                Login: 
              </Label>
              <Input type="text" name="login" id="login" />
            </LoginInputs>
            <LoginInputs>
              <Label htmlFor="password">
                Senha: 
              </Label>
              <Input type="password" name="password" id="password" />
            </LoginInputs>
          </Wrapper>
          <Button type="submit">Entrar</Button>
          <Span>
            Quer criar uma conta? Clique <a href="#">aqui</a>
          </Span>
        </Container>
      </Background>
    </>
  );
};


export default Login;
