import styled from "styled-components";

import { colors, linearBackGroundColors } from "../Css/variables";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${linearBackGroundColors.blue_blue};
  color: white;
  h3 {
    color: ${colors.supplementary_green};
    font-size: 18px;
  }
`;

export const RecordHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  width: 70vw;
  min-width: 300px;
  margin: 0 auto;
  padding-top: 30px;
  height: 60px;
  button {
    all: unset;
    display: flex;
    align-items: center; /* Center items vertically */
    font-size: 8px;
    cursor: pointer;

    p {
      font-size: 14px;
      margin-left: 5px; /* Add some spacing between icon and text */
    }

    svg {
      font-size: 24px;
    }
  }

  div {
  }
`;

export const RecordWrapper = styled.div`
  margin: 40px auto;
  width: 70vw;
  height: 70vh;
  min-width: 330px;
  min-height: 420px;
  h2 {
    font-size: 16px;
    margin: 20px 0;
  }
`;

export const RecordProps = styled.div`
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 100%;
  position: relative;
  textarea {
    all: unset;
    padding-top: 30px;
    padding-left: 20px;
    width: 90%;
    height: 60%;
  }
  textarea::placeholder {
    color: white;
  }
`;

export const StickerBoard = styled.div`
  position: absolute;
  bottom: 20px;
  width: 90%;
  height: 120px;
  p {
    padding-left: 15px;
    font-size: 14px;
  }
`;

export const BoardItems = styled.div`
  width: 70vw;
  margin-top: 20px;
  padding: 0 20px;
  min-width: 330px;
  display: flex;

  justify-content: space-between;
  label {
    width: 30%;
    div {
      width: 100%;
      height: 60px;
      background-color: rgba(217, 217, 217, 0.2);
      border-radius: 5px;
      position: relative;
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 25px;
        fill: rgba(255, 255, 255, 0.2);
      }
    }
    img {
      width: 100%;
      height: 60px;
    }
  }
`;

export const ModalPage = styled.div`
  width: 90%;
  height: 85%;
  z-index: 50;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(53, 53, 53, 0.7);
  justify-content: center;
  overflow: auto;
`;

export const SongSearchBox = styled.div`
  position: relative;
  width: 70vw;
  min-width: 280px;
  height: 40px;
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
    font-size: 16px;
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
    color: white;
    font-size: 20px;
  }
`;

export const StickerSelectBox = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);

  p {
    font-size: 16px;
    color: white;
    margin-bottom: 20px;
    width: 70vw;
    min-width: 280px;
    margin: 0px auto 20px;
  }
  div {
    display: flex;
    justify-content: center;
    height: 10vh;
    img {
    }
    .selected {
      border: 3px solid lightpink;
      border-radius: 10px;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 70vw;
  min-width: 280px;

  z-index: 30;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 5%);
  button {
    all: unset;
    color: ${colors.supplementary_green};
  }
  button:nth-child(1) {
    color: #d6d6d6;
  }
`;
