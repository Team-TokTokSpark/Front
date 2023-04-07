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
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px 20px 30px;
`;

export const ContainerWrapper = styled.div`
  margin: 0px 20px 10px 20px;
  height: 60%;
  display: grid;
  grid-auto-rows: 33%;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  /* gap: 10px 10px; */
  border-radius: 10%;
  background-color: gray;
  place-items: center;
  overflow: scroll;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
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
  width: 75%;
  height: 65%;
`;

export const FriendButton = styled.button`
  width: 76px;
  height: 37px;
  background-color: #eeeeee;
  border-color: transparent;
  margin-top: 10px;
`;

export const PageMakeButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #99aae4;
  border-color: transparent;
  position: absolute;
  top: 70%;
  left: 82%;
`;

export const ExportButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  position: absolute;
  border-color: transparent;
  background-color: #a5ff85;
  top: 80%;
  left: 82%;
`;

export const EditStickerButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  position: absolute;
  border-color: transparent;
  background-color: #ff958e;
  color: white;
  top: 90%;
  left: 82%;
`;
