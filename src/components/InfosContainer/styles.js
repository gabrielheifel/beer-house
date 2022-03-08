import styled from 'styled-components';

export const Container = styled.div`
  min-width: 200px;
  /* height: 50vh; */
  border-radius: 15px;
  border: 1px solid #2f2f2f;
`;

export const Title = styled.h1`
  font-size: 22px;
  text-align: start;
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid #2f2f2f;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0 10px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ItemTitle = styled.span`
  color: #2dc12d;
  font-weight: 500;
  font-size: 19px;
`;

export const Client = styled.span`
  font-weight: 700;
  color: #2f2f2f;
`;
export const Buy = styled.span``;

export const Page = styled.div`
  padding: 5px;
  border: 1px solid #2f2f2f;
`;

export const PrevPage = styled.span`
  /* padding-right: 50px; */
  border-right: 1px solid #2f2f2f;
  cursor: pointer;
`;
export const NextPage = styled.span`
  /* padding-left: 50px; */
  cursor: pointer;
`;

export const AddClient = styled.div`
  text-align: start;
  background: #cdcdcd;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 0 0 15px 15px;
  cursor: pointer;
`;
