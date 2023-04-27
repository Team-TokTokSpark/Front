import styled from "styled-components";
import { colors } from "../Css/variables";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(${colors.defaultGold}, ${colors.darkGold});
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 32px;
  padding: 15px 0 0 15px;
`;

export const Ul = styled.ul`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  min-width: 300px;
  height: 60px;
  margin: 5px auto;
`;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
  div:nth-child(1) {
    font-size: 20px;
  }
  div:nth-child(2) {
    font-size: 10px;
    width: 200px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    background: none;
    border: 0;
    outline: 0;
    font-size: 18px;
    margin: 0 3px;
  }
`;
