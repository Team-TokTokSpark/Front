import React, { useState } from "react";
import { RemoveTextButton } from "../Styles/EditPageStyle";
import {
  MakeBodyWrapper,
  Title,
  TitleInput,
  TitleMakeWrapper,
} from "../Styles/HomePageMakeStyle";
import CancleComplete from "../Components/Utils/CancleComplete";
import ColorChange from "../Components/Utils/ColorChange";

const MakePage = () => {
  const [text, setText] = useState("Hi");
  const displayText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const removeText = (e: React.MouseEvent<HTMLButtonElement>) => {
    setText("");
  };
  return (
    <MakeBodyWrapper>
      <CancleComplete colorNum={-1} />
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
      <ColorChange colorNumber={0} />
    </MakeBodyWrapper>
  );
};

export default MakePage;
