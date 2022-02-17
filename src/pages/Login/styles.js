import styled from 'styled-components';

export const Background = styled.div`
  background: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #2f2f2f;
  padding: 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  margin: 20px;
`;

export const LoginInputs = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

export const Label = styled.label`
  color: #fff;
  margin-right: 5px;
`;

export const Input = styled.input`
  padding-left: 10px;
  border-radius: 10px;
  width: 100%;
  height: 30px;
  outline: none;
  border: none;
`;

export const Button = styled.button`
  text-align: center;
  width: 50%;
  height: 35px;
  border-radius: 10px;
  background: linear-gradient( 
    90deg, 
    #2b912c 0%,
    rgb(0, 236, 18) 100% 
  );  
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    color: #2f2f2f;
  }
`;

export const Span = styled.span`
  margin-top: 20px;
  color: #fff;
`;
