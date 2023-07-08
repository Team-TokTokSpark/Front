import styled from "styled-components";

import { colors, linearBackGroundColors } from "../Css/variables";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${linearBackGroundColors.blue_medium_light};
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
  width: 70%;
  min-width: 320px;
  margin: 0 auto;
  padding-top: 50px;
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
  width: 90%;
  margin: 0 auto;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  font-size: 15px;
`;

export const ProfileContainer = styled.div`
  height: 80%;
  width: 90%;
  min-width: 300px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin: 30px auto;
  padding: 5vh 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  div {
    width: 100%;
    margin: 10px auto;
    margin-left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      width: 20%;
      font-size: 11px;
      min-width: 50px;
    }
    input,
    span,
    textarea {
      width: 80%;
      font-size: 14px;
    }
    input,
    textarea {
      color: white;
      background-color: rgba(255, 255, 255, 0.3);
      border: none;
      border-radius: 3px;
      resize: none;
      text-indent: 1px;
      ::placeholder {
        color: white;
        opacity: 0.7;
        font-size: 14px;
      }
      :hover {
        border: 1px solid white;
      }
      :focus {
        outline: none;
        border: 1px solid white;
      }
    }
  }
`;

export const AccountBox = styled.div`
  height: 50%;
  width: 90%;
  padding-top: 30px;
  margin: 0 auto;
  border-top: 1px solid white;
  font-size: 15px;
  font-weight: 400;

  button {
    all: unset;
    margin: 20px 0;
    cursor: pointer;
    display: block;
    margin-left: 15px;

    font-weight: 700;
    font-size: 16px;
    position: relative;
    top: 20%;
    transform: translateY(-20%);
  }
`;
