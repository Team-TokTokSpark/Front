import styled from "styled-components";

import { colors, linearBackGroundColors } from "../Css/variables";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${linearBackGroundColors.blue_orange};
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

  span {
    color: ${colors.primary_dark};
    font-size: 24px;
  }
  button {
    all: unset;
    margin-top: 80px;
  }
`;

export const Logo = styled.img`
  display: block;
  margin-bottom: 50px;
`;
