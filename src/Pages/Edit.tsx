import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { MusicColor } from "../atom";
import { useNavigate } from "react-router-dom";
import { MainBody } from "../Styles/HomePageStyle";
import EditStickerShow from "../Components/EditStickerShow";
import {
  ColorChangeDiv,
  EditButtonDiv,
  InputTitle,
  RemoveTextButton,
} from "../Styles/EditPageStyle";

const EditPage = () => {
  const [backGroundColorNum, setBackGroundColorNum] =
    useRecoilState(MusicColor);
  const [colorNum, setColorNum] = useState(backGroundColorNum);
  const navigate = useNavigate();
  const [text, setText] = useState("일단은 이렇게라도 하자");
  const colorArray = ["color0", "color1", "color2", "color3"];
  const displayText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const removeText = (e: React.MouseEvent<HTMLButtonElement>) => {
    setText("");
  };
  return (
    <MainBody>
      <div className={`pageTheme${backGroundColorNum}`}>
        <EditButtonDiv>
          <div
            onClick={() => {
              navigate(-1);
            }}
          >
            취소
          </div>
          <div
            onClick={() => {
              setBackGroundColorNum(colorNum);
              navigate(-1);
            }}
          >
            완료
          </div>
        </EditButtonDiv>
        <div className="editTitle-part">
          <InputTitle type="text" value={text} onChange={displayText} />
          <RemoveTextButton onClick={removeText}>X</RemoveTextButton>
        </div>
        <ColorChangeDiv>
          {colorArray.map((e, index) => {
            if (colorNum === index) {
              return (
                <button
                  className={`${"checkcolor"} ${e}`}
                  onClick={() => {
                    setColorNum(index);
                  }}
                />
              );
            } else {
              return (
                <button
                  className={` ${e}`}
                  onClick={() => {
                    setColorNum(index);
                  }}
                />
              );
            }
          })}
        </ColorChangeDiv>
        <EditStickerShow />
      </div>
    </MainBody>
  );
};

export default EditPage;
