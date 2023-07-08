import styled from "styled-components";

import { colors, linearBackGroundColors } from "../Css/variables";
import { rotate, arrow_down, arrow_wave } from "../Css/KeyFrames";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${linearBackGroundColors.login_bg};
  color: white;
  align-items: center;
  justify-content: center;
`;

export const NoticeButton = styled.div`
  text-align: right;
  font-size: 32px;
  padding: 15px 15px 0 0;

  svg {
    fill: ${colors.supplementary_yellow};
  }
`;

export const MainContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    margin: 5px 0;
    color: white;
    font-size: 5px;
    strong {
      font-size: 15px;
    }
  }
  button {
    all: unset;
    margin-top: 80px;
  }
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 180px;
`;
export const CD = styled.img`
  display: block;
  margin: 40px auto;
  animation: ${rotate} 20s linear infinite;
`;

export const ArrowBox = styled.div`
  display: inline-block;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);
  text-align: center;
  animation: ${arrow_down} 3s infinite;
`;

export const ArrowItem = styled.div`
  width: 6px;
  height: 6px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  animation: ${arrow_wave} 1s infinite;
  animation-direction: alternate;
  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    margin-top: 4px;
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    margin-top: 4px;
    animation-delay: 0.5s;
  }
`;
