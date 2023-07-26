import React, { useState } from "react";
import { ColorChangeDiv } from "../../Styles/EditPageStyle";
import { ChangeMusicColor, MusicColor } from "../../atom";
import { useSetRecoilState } from "recoil";

type Props = {
  colorNumber: number;
};

const ColorChange = ({ colorNumber }: Props) => {
  const [colorNum, setColorNum] = useState(colorNumber);
  const changeColor = useSetRecoilState(MusicColor);
  const MakeBackGroundMusic = useSetRecoilState(ChangeMusicColor);
  const colorArray = ["color0", "color1", "color2", "color3"];
  return (
    <>
      <ColorChangeDiv>
        {colorArray.map((e, index) => {
          if (colorNum === index) {
            return (
              <button
                className={`${"checkcolor"} ${e}`}
                onClick={() => {
                  setColorNum(index);
                  MakeBackGroundMusic(index);
                  changeColor(index);
                }}
              />
            );
          } else {
            return (
              <button
                className={` ${e}`}
                onClick={() => {
                  setColorNum(index);
                  MakeBackGroundMusic(index);
                  changeColor(index);
                }}
              />
            );
          }
        })}
      </ColorChangeDiv>
    </>
  );
};

export default ColorChange;
