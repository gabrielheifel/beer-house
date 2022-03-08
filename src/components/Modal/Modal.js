import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Modal = (props) => {

  const {showModal, setShowModal} = props


  return(
    <>
      {showModal ?
          <Background>
            <div>
              
            </div>
            <CloseBtn onClick={() => setShowModal(!showModal)}>
              <MdClose />
            </CloseBtn>
          </Background>
        : null
      }
    </>
  )
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const CloseBtn = styled.div`
  position: absolute;
  color: white;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  font-size: 25px;
  cursor: pointer;
`;

export default Modal