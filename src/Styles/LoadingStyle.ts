import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  text-align: center;
  svg {
    position: absolute;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
  }
`;
