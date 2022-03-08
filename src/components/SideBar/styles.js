import styled from 'styled-components';

export const Aside = styled.aside`
  background: #2f2f2f;
  width: fit-content;
  height: 100%;
  padding: 20px;
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Item = styled.li`
  color: #e0e9e3;
  background: #6bb229;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
  list-style: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #25e485;
  }
`;