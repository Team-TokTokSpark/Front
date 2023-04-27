import styled from "styled-components";

export const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0%;
  left: 0%;

  .setting-part {
    margin: 20px 30px 10px 0px;
    display: flex;
    justify-content: end;
  }
  .nickname-part {
    margin: 20px 0px 10px 30px;
    display: flex;
    justify-content: start;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px 20px 30px;
`;

export const PlayMusic = styled.div`
  width: 309px;
  height: 63px;
  position: absolute;
  top: 15%;
  left: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  z-index: 200;
  border-radius: 25px;
`;

export const ContainerWrapper = styled.div`
  margin: 0px 30px 10px 5%;
  width: 329px;
  height: 418px;
  display: grid;
  grid-auto-rows: 33%;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  /* gap: 10px 10px; */
  border-radius: 20px;
  background-color: gray;
  place-items: center;
  overflow: scroll;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;

  .sticker-select {
    border: 3px solid lightpink;
  }
`;

export const LongContainerWrapper = styled.div`
  margin: 0px 20px 10px 5%;
  width: 329px;
  height: 550px;
  display: grid;
  grid-auto-rows: 25%;
  grid-template-columns: repeat(auto-fill, minmax(27%, auto));
  /* gap: 10px 10px; */
  border-radius: 20px;
  background-color: gray;
  place-items: center;
  overflow: scroll;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;

  .sticker-select {
    border: 3px solid lightpink;
  }
`;

export const MessageBox = styled.div`
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

export const SpecialMessageBox = styled.div`
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

export const ContainerPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  border-color: transparent;
  text-align: center;
  box-sizing: content-box;
  border-radius: 10%;
  width: 90px;
  height: 90px;
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
  width: 83px;
  height: 39px;
  background-color: #d2d2d2;
  border-radius: 25px;
  border-color: transparent;
  position: absolute;
  left: 70%;
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
  width: 69px;
  height: 69px;
  border-radius: 50%;
  background-color: #a5ff85;
  border-color: transparent;
  position: absolute;
  top: 483px;
  left: 287px;
`;

export const ExportButton = styled.button`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  position: absolute;
  border-color: transparent;
  background-color: #99aae4;
  top: 567px;
  left: 287px;
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
