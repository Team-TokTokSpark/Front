import styled from "styled-components";

import { linearBackGroundColors } from "../Css/variables";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: ${linearBackGroundColors.medium_supple_blue};
  color: white;
`;

export const FriendsListHeader = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 70vw;
  min-width: 320px;
  margin: 0 auto;
  padding-top: 30px;
  height: 60px;
  button {
    all: unset;
    cursor: pointer;
    svg {
      font-size: 24px;
    }
  }
  div {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 70vw;
  min-width: 310px;
  height: 30px;
  margin: 30px auto 0;
  input {
    display: block;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 10px;
    padding-left: 50px;
    color: white;
    font-size: 12px;
  }
  input::placeholder {
    color: #d9d9d9;
  }
  input:focus {
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translate(0%, -50%);
    font-size: 20px;
  }
`;
export const Ul = styled.ul`
  /* position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%); */
  width: 70vw;
  min-width: 320px;
  height: 100%;
  margin: 20px auto 0;
  padding: 0 0 5px 0;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  min-width: 320px;
  height: 80px;
  margin: 10px auto;
  padding: 0 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 1px 2px 4px rgba(255, 255, 255, 0.05);
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
  div:nth-child(1) {
    font-size: 20px;
    padding-bottom: 5px;
  }
  div:nth-child(2) {
    font-size: 9px;
    width: 200px;
    color: #f1ffdb;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
    width: 70px;
    height: 30px;
    border-radius: 15px;
    border: 0;
    outline: 0;
    font-size: 11px;
    cursor: pointer;
    margin: 0 3px;
  }
`;
