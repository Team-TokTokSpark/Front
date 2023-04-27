import styled from "styled-components";
import { colors } from "../Css/variables";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};
  color: white;
  align-items: center;
  justify-content: center;
`;
export const NoticeButton = styled.div`
  text-align: right;
  font-size: 32px;
  padding: 15px 15px 0 0;
  svg {
    fill: ${colors.defaultGold};
  }
`;

export const MainContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Logo = styled.h1`
  font-family: "yg-jalnan", sans-serif;
  text-align: center;
  font-size: 64px;
  margin-bottom: 20px;
`;
