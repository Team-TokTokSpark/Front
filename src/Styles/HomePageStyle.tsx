import styled from "styled-components";
import { colors } from "../Css/variables";

export const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(${colors.darkPurple}, ${colors.defaultGold});
  top: 0%;
  left: 0%;

  .setting-part {
    padding-top: 20px;
    margin: 0px 30px 10px 0px;
    height: 26px;
    display: flex;
    justify-content: end;
    img {
      height: 25px;
      width: 24px;
    }
  }
  .nickname-part {
    margin: 0px 0px 10px 30px;
    height: 26px;
    display: flex;
    justify-content: start;
    align-items: center;
    color: white;
    font-size: 10px;
    line-height: 12px;
    font-weight: 400;
    .user_name {
      font-size: 12px;
      line-height: 13px;
      font-weight: 700;
    }
  }

  .title-part {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    height: 30px;
    align-items: center;
    color: white;
    font-size: 20px;
    line-height: 24px;
    font-size: 700;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px 20px 30px;
`;

export const PlayMusic = styled.div`
  width: 192px;
  height: 34px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(234, 234, 234, 0.2);
  color: white;
  z-index: 200;
  border-radius: 20px;
  padding: 5px 0px 5px 0px;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
`;

export const ContainerWrapper = styled.div`
  margin: 0px 30px 10px 5%;
  width: 320px;
  height: 480px;
  display: grid;
  grid-template-rows: 15%;
  grid-auto-rows: 20%;
  grid-template-columns: repeat(auto-fill, minmax(27%, auto));
  /* gap: 10px 10px; */
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
  place-items: center;
  overflow: scroll;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;

  .playMusic {
    grid-column: auto / span 3;
  }

  .sticker-select {
    border: 3px solid lightpink;
  }
`;

export const LongContainerWrapper = styled.div`
  margin: 0px 20px 10px 5%;
  width: 320px;
  height: 480px;
  display: grid;
  grid-template-rows: 15%;
  grid-auto-rows: 20%;
  grid-template-columns: repeat(auto-fill, minmax(16%, auto));
  /* gap: 10px 10px; */
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
  place-items: center;
  overflow: scroll;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;

  .playMusic {
    grid-column: auto / span 6;
  }

  .even-item {
    grid-column: auto / span 3;
  }

  .item {
    grid-column: auto / span 2;
  }

  .sticker-select {
    border: 3px solid lightpink;
  }
`;

export const MessageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -100px -100px 0px 0px;
  width: 99px;
  height: 39px;
  z-index: 999;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border-radius: 25px;
`;

export const SpecialMessageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -100px 0px 0px -100px;
  width: 99px;
  height: 39px;
  z-index: 999;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border-radius: 25px;
`;

export const ContainerPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  border-color: transparent;
  text-align: center;
  box-sizing: content-box;
  border-radius: 10%;
  width: 64px;
  height: 64px;
`;

export const EditButton = styled.button`
  width: 34px;
  height: 28px;
  border-color: transparent;
  background-color: #e9e9e9;
  font-size: 8px;
  border-radius: 25px;
`;

export const ShareButton = styled.button`
  width: 69px;
  height: 26px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 13px;
  border-color: transparent;
  font-size: 12px;
`;

export const FriendButton = styled.button`
  width: 76px;
  height: 37px;
  background-color: #eeeeee;
  border-color: transparent;
  margin-top: 10px;
`;

export const PageMakeButton = styled.button`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  background-color: #a5ff85;
  border-color: transparent;
  position: absolute;
  top: 537px;
  left: 282px;
`;

export const StickerMakeButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: linear-gradient(
    180deg,
    rgba(255, 220, 220, 0.7) 0%,
    rgba(241, 255, 203, 0.7) 100%
  );
  border-color: transparent;
  position: absolute;
  top: 520px;
  left: 300px;
  svg {
    width: 30px;
    height: 30px;
    color: white;
    background: transparent;
    border-radius: 50%;
  }
`;

export const ExportButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: transparent;
  border-color: transparent;
  top: 460px;
  left: 300px;
  svg {
    width: 50px;
    height: 50px;
    background-color: transparent;
    color: #1ed760;
    border-radius: 50%;
  }
`;

export const EditStickerButton = styled.button`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  position: absolute;
  border-color: transparent;
  background-color: #ff958e;
  color: white;
  top: 649px;
  left: 287px;
`;
