import styled from "styled-components";
import { colors, linearBackGroundColors } from "../Css/variables";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${linearBackGroundColors.login_bg};
  color: white;
  display: flex;
  position: relative;
  justify-content: center;
  button {
    all: unset;
    position: absolute;
    top: 5%;
    left: 90%;
    transform: translate(-90%, -5%);
    font-size: 14px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 32px;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    width: 300px;
    margin: 0 auto 60px;
    text-align: left;
    span {
      color: ${colors.supplementary_green};
    }
  }
  p {
    width: 300px;
    margin: 0 auto 60px;
    text-align: left;
    font-size: 14px;
  }
`;

export const Form = styled.form`
  margin: 0px auto;
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
      color: white;
      font-size: 13px;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
    input::placeholder {
      color: white;
    }
  }
`;

export const SpotifyButton = styled.div`
  color: ${colors.supplementary_green};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  width: 220px;
  height: 50px;
  border-radius: 25px;
  margin: 150px auto 0;
`;
