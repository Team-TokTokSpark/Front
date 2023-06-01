import styled from "styled-components";

import { colors, linearBackGroundColors } from "../Css/variables";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${linearBackGroundColors.medium_supple_blue};
  color: white;
  h3 {
    color: ${colors.supplementary_green};
    font-size: 18px;
  }
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

export const ProfileBox = styled.div`
  height: 50%;
  width: 60vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
`;

export const ProfileContainer = styled.div`
  height: 80vh;
  width: 70vw;
  min-width: 300px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin: 30px auto;
  padding: 5vh 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  ${ProfileBox}:nth-child(2) {
    border-top: 1px solid white;
    font-size: 15px;
    font-weight: 400;

    div {
      margin-top: 20px;
    }
    button {
      all: unset;
      margin: 5px 0;
      cursor: pointer;
    }
    .fw700 {
      font-weight: 700;
      font-size: 16px;
    }
    .left30 {
      margin-left: 15px;
    }
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    all: unset;
    font-size: 10px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
    width: 45px;
    height: 26px;
    text-align: center;
    border-radius: 13px;
  }
`;

export const ProfileInfo = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    padding: 0 15px;
    p {
      display: flex;
      align-items: center;
      width: 20%;
      font-size: 11px;
      min-width: 50px;
    }
    input {
      all: unset;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 20px;

      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1);
      text-indent: 10px;
    }
    input,
    span {
      width: 100%;
      font-size: 15px;
      height: 25px;
    }
    span {
      display: block;
      line-height: 25px;
      text-align: left;
      padding-left: 5px;
    }
  }
`;
