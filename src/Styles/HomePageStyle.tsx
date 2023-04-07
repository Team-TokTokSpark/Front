import styled from "styled-components";

export const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0%;
  left: 0%;

  .setting-part {
    margin: 20px 20px 10px 0px;
    display: flex;
    justify-content: end;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

export const ContainerWrapper = styled.div`
  margin: 0px 20px 10px 20px;
  height: 50%;
  display: grid;
  grid-auto-rows: 28%;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 10px 10px;
  border-radius: 20%;
  background-color: gray;
  place-items: center;
  overflow: scroll;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
`;

export const PageMakeButton = styled.button`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  background-color: #99aae4;
  border-color: transparent;
  position: absolute;
  top: 60%;
  left: 80%;
`;
