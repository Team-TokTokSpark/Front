import styled from "styled-components";
import { linearBackGroundColors } from "../Css/variables";

export const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-color: transparent;
  background-color: #ff958e;
  color: white;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
  margin: -70px -70px 0px 0px;
  z-index: 100;
`;

export const EditButtonDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  color: white;
  justify-content: space-between;
  padding: 10px;
  margin: 0px 20px;
`;

export const RemoveTextButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-color: transparent;
  background-color: #a0a0a0;
  color: white;
`;

export const InputTitle = styled.input`
  background-color: transparent;
  border-color: transparent;
  width: 242px;
  height: 24px;
  font-weight: 700;
  line-height: 24px;
  font-size: 20px;
  color: white;
`;

export const ColorChangeDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
  width: 257px;
  height: 35px;

  button {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  .checkcolor {
    border-color: white;
  }
  .color0 {
    background: ${linearBackGroundColors.blue_blue};
  }
  .color1 {
    background: ${linearBackGroundColors.blue_orange};
  }
  .color2 {
    background: ${linearBackGroundColors.purple_yellow};
  }
  .color3 {
    background: ${linearBackGroundColors.pink_green};
  }
`;
