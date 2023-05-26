import styled from "styled-components";
import { colors, linearBackGroundColors } from "../Css/variables";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${linearBackGroundColors.purple_yellow};
`;
export const BackButton = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 32px;
  padding: 15px 0 0 15px;
`;

export const ProfileBox = styled.div`
  height: 33%;
  width: 60vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
`;

export const ProfileContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 70vw;
  min-width: 300px;
  background-color: rgba(211, 211, 211, 0.3);
  border-radius: 30px;
  padding: 5vh 20px;

  ${ProfileBox}:nth-child(2) {
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    div {
      font-size: 16px;
      font-weight: 700;
    }
  }
  ${ProfileBox}:nth-child(3) {
    button {
      all: unset;
      margin: 5px 0;
      cursor: pointer;
    }
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  div {
    font-weight: 700;
  }
  button {
    all: unset;
    cursor: pointer;
  }
`;

export const ProfileInfo = styled.div`
  div:nth-child(1) {
    font-size: 24px;
    margin-bottom: 4px;
  }
  div:nth-child(2) {
    font-size: 15px;
  }
`;
