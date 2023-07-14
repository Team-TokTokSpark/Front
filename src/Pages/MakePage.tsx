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
import ToggleButton from "../Components/Main/ToggleButton";

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
      <ToggleButton />
      <TitleMakeWrapper>
        <Title>{text}</Title>
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
      <ColorChange colorNumber={0} />
    </MakeBodyWrapper>
  );
};

export default MakePage;
