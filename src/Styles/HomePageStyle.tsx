import styled from "styled-components";

export const MainBody = styled.div`
  width: 100vw;
  height: 100vh;

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
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 10px 10px;
  border-radius: 20%;
  background-color: gray;
`;
