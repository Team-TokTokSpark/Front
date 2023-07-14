import React, { useState } from "react";
import {
  ColorChangeDiv,
  EditButtonDiv,
  RemoveTextButton,
} from "../Styles/EditPageStyle";
import { useNavigate } from "react-router-dom";
import {
  MakeBodyWrapper,
  Title,
  TitleInput,
  TitleMakeWrapper,
} from "../Styles/HomePageMakeStyle";

const MakePage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("Hi");
  const [colorNum, setColorNum] = useState(0);
  const colorArray = ["color0", "color1", "color2", "color3"];
  const displayText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const removeText = (e: React.MouseEvent<HTMLButtonElement>) => {
    setText("");
  };
  return (
    <MakeBodyWrapper>
      {/* 해당 파트는 리팩토링이 필요한 부분 취소 완료 부분!*/}
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
            navigate(-1);
          }}
        >
          완료
        </div>
      </EditButtonDiv>
      {/* <div className="editTitle-part"></div> */}
      <TitleMakeWrapper>
        <Title>{text}</Title>
        {/* <InputTitle type="text" value={text} onChange={displayText} /> */}
        <TitleInput
          placeholder="제목을 입력하세요"
          type="text"
          value={text}
          onChange={displayText}
        ></TitleInput>
        <RemoveTextButton
          style={{
            marginLeft: "-25px",
          }}
          onClick={removeText}
        >
          X
        </RemoveTextButton>
      </TitleMakeWrapper>
      <Title>페이지 배경 색상</Title>
      {/* 색깔 바꾸는 부분도 리팩토링을 해야하는 부분! */}
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
    </MakeBodyWrapper>
  );
};

export default MakePage;
