import { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';

const OrangeBtn = ({ add }) => {

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(!showModal);

  return (
    <>
      <Btn onClick={openModal}>+ Adicionar {add}</Btn>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
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
