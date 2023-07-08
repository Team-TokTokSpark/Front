import styled from "styled-components";
import { colors } from "../Css/variables";
import { blinking, rotate } from "../Css/KeyFrames";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;

  div {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
  background-color: ${colors.primary_light};
  z-index: 100;
  text-align: center;
`;

export const LoadingText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  animation: ${blinking} 1.5s step-end infinite;
`;

export const Logo = styled.img`
  width: 120px;
  margin: 30px auto;
  animation: ${rotate} 3s linear infinite;
`;
