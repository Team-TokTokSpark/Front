import styled from "styled-components";

export const BackgroundModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 300;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalPage = styled.div`
  width: 210px;
  height: 330px;
  z-index: 450;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: white;
  justify-content: center;
  overflow: auto;
`;
