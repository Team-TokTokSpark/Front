import styled from "styled-components";

import { colors, linearBackGroundColors } from "../Css/variables";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${linearBackGroundColors.light_blue};
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

export const WithdrawlContainer = styled.div`
  width: 280px;
  height: 50vh;
  position: absolute;
  top: 40%;
  left: 50%;
  p {
    font-size: 16px;
    font-weight: 700;
  }
  p:nth-child(2) {
    font-weight: 400;
    font-size: 10px;
    margin-bottom: 50px;
  }

  transform: translate(-50%, -50%);
  ul {
    width: 250px;
    margin: 0 auto;
    margin-top: 30px;
    li {
      font-size: 14px;
      text-align: left;
    }
  }
  div {
    width: 280px;
    text-align: center;
    margin: 60px auto 0;
    button {
      all: unset;
      text-align: center;
      position: absolute;
      left: 50%;
      width: 140px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      border-radius: 22px;
      transform: translateX(-50%);
      background-color: rgba(54, 70, 128, 0.3);
      color: white;
    }
    .success {
      height: 40px;
      font-size: 14px;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;
