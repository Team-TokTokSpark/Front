import styled from "styled-components";
import { linearBackGroundColors } from "../Css/variables";

export const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  background: ${linearBackGroundColors.darkblue_blue};

  top: 0%;
  left: 0%;

  .pageTheme0 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: ${linearBackGroundColors.blue_blue};
  }

  .pageTheme1 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: ${linearBackGroundColors.blue_orange};
  }

  .pageTheme2 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: ${linearBackGroundColors.purple_yellow};
  }

  .pageTheme3 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: ${linearBackGroundColors.pink_green};
  }

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
  //보관함 메인화면 자기소개 및 음악페이지 닉네임 부분
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
    .music_note {
      width: 16px;
      height: 14px;
      margin: 0px 10px;
    }
    .user_name {
      font-size: 12px;
      line-height: 13px;
      font-weight: 700;
    }
  }

  .editTitle-part {
    width: 309px;
    border-bottom: 2px solid white;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 20px;
  }

  .title-part {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    height: 30px;
    align-items: center;
    color: white;
    font-size: 21px;
    line-height: 24px;
    font-size: 700;
  }
`;

// export const HeaderWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 20px 30px 20px 30px;
// `;

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
  margin: 30px 20px;
  width: 330px;
  height: 480px;
  display: grid;
  grid-template-rows: 1%;
  grid-auto-rows: 20%;
  grid-template-columns: repeat(auto-fill, minmax(27%, auto));
  gap: 20px 10px;
  border: 2px solid transparent;
  border-radius: 20px;
  //콘텐츠 색깔 보더 색깔
  background-image: ${linearBackGroundColors.light_blue},
    ${linearBackGroundColors.green_purple};
  //어느 영역부터 채울지
  background-origin: border-box;
  //어떻게 background 요소들을 넣을지
  background-clip: content-box, border-box;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
  place-items: center;
  overflow: scroll;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
  .blackSpace {
    grid-column: auto / span 3;
  }
  .containerTheme0 {
    width: 70px;
    height: 70px;
    background: ${linearBackGroundColors.blue_blue};
    background-repeat: no-repeat;
  }

  .containerTheme1 {
    width: 70px;
    height: 70px;
    background: ${linearBackGroundColors.blue_orange};
    background-repeat: no-repeat;
  }

  .containerTheme2 {
    width: 70px;
    height: 70px;
    background: ${linearBackGroundColors.purple_yellow};
    background-repeat: no-repeat;
  }

  .containerTheme3 {
    width: 70px;
    height: 70px;
    background: ${linearBackGroundColors.pink_green};
    background-repeat: no-repeat;
  }
`;

export const LongContainerWrapper = styled.div`
  margin: 0px 20px 10px 5%;
  width: 330px;
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
  margin: -100px -20px 0px 0px;
  width: 99px;
  height: 39px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border-radius: 25px;
`;

export const ContainerPage = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  background-color: transparent;
  border-color: transparent;
  word-break: break-all;
  text-align: right;
  box-sizing: content-box;
  border-radius: 15px;
  background-size: 90px 90px; //96px 64px
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  color: white;
  padding: 10px;
  width: 70px; //96px
  height: 70px;
  .imgInput {
    width: 36px;
    height: 36px;
    background-size: 36px 36px;
    background-position: center;
    margin-top: 10px;
    align-self: flex-start;
  }
`;

export const BigStickerPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  text-align: center;
  box-sizing: content-box;
  border-radius: 10%;
  background-size: 96px 64px; //96px 64px
  width: 96px; //96px
  height: 64px;
`;

export const StickerPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  text-align: center;
  box-sizing: content-box;
  border-radius: 10%;
  background-size: 64px 64px; //96px 64px
  width: 64px; //96px
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

//공유 및 친구목록 버튼
export const ShareButton = styled.button`
  width: 69px;
  height: 26px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 13px;
  border-color: transparent;
  font-size: 12px;
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
  z-index: 20;
  background-color: linear-gradient(
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
  z-index: 20;
  svg {
    width: 50px;
    height: 50px;
    background-color: transparent;
    color: #1ed760;
    border-radius: 50%;
  }
`;

export const EditStickerButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${linearBackGroundColors.pink_green};
  background-repeat: no-repeat;
  border-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 90%;
  left: 50%;
  svg {
    width: 30px;
    height: 30px;
    color: white;
    background: transparent;
    border-radius: 50%;
    filter: drop-shadow(2px 3px 2px rgba(0, 0, 0, 0.15));
  }
`;

export const MiniSticker = styled.img`
  width: 64px;
  height: 64px;
`;
