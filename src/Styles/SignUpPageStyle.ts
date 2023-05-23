import styled from "styled-components";
import { linearBackGroundColors } from "../Css/variables";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${linearBackGroundColors.blue_orange};
  color: white;
  display: flex;
  position: relative;
  justify-content: center;
`;

export const MainContainer = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 28px;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    width: 300px;
    margin: 0 auto;
    text-align: left;
  }
`;

export const Form = styled.form`
  margin: 60px auto 0;
  width: 300px;
  label {
    display: flex;
    margin: 10px auto;
    align-items: center;

    span {
      font-size: 16px;
      min-width: 70px;
    }

    input {
      all: unset;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      width: 200px;
      height: 40px;
      color: #525252;
      font-size: 14px;
      text-align: center;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
    input::placeholder {
      color: #525252;
    }
  }
  button {
    all: unset;
    position: absolute;
    top: 5%;
    left: 90%;
    transform: translate(-90%, -5%);
  }
`;
