import styled from "styled-components";
import { colors } from "../../Css/variables";

export const BackgroundModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 300;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalPage = styled.div`
  width: 90%;
  height: 75%;
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

export const MessageModalPage = styled.div`
  width: 60%;
  height: 15%;
  z-index: 400;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  overflow: auto;
  .text {
    width: 172px;
    position: relative;
    top: 2%;
    left: 10%;
    color: white;
    font-weight: 15px;
    div {
      font-weight: 11px;
    }
  }
  .message {
    position: relative;
    top: 10%;
    left: 10%;
    width: 180px;
    font-size: 11px;
    font-weight: 400;
    color: ${colors.supplementary_green};
  }
`;

export const MessageButton = styled.button`
  all: unset;
  cursor: pointer;
  position: relative;
  top: 10%;
  left: 80%;
  svg {
    font-size: 16px;
  }
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

export const SongSearchListWrapper = styled.div`
  overflow: scroll;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
  width: 90%;
  height: 70%;
  background-color: transparent;
  margin: auto;
`;

export const SongSearchList = styled.button`
  position: relative;
  width: 260px;
  height: 40px;
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background-color: transparent;
  border-color: transparent;
  color: white;
  margin: 0px auto;
  box-sizing: content-box;
  .title {
    font-size: 14px;
    font-weight: 400;
  }

  .artist {
    font-size: 11px;
    font-weight: 400;
  }

  img {
    width: 40px;
    height: 40px;
  }

  &.click {
    background-color: rgba(255, 255, 255, 0.2);
  }

  svg {
    position: absolute;
    left: 88%;
  }
`;

export const StickerSelectBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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

export const MessageRecommend = styled.input`
  all: unset;
  width: 70vw;
  min-width: 280px;
  display: block;
  height: 40px;
  margin: 30px auto 40px;
  border: 1px solid ${colors.supplementary_green};
  border-radius: 10px;
  padding-left: 10px;
  font-size: 14px;

  color: ${colors.supplementary_green};
  ::placeholder {
    color: ${colors.supplementary_green};
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
