import React, { useState } from "react";
import { RemoveTextButton } from "../Styles/EditPageStyle";
import {
  DateInput,
  MakeBodyWrapper,
  Title,
  TitleInput,
  TitleMakeWrapper,
  UnableTitle,
} from "../Styles/HomePageMakeStyle";
import CancleComplete from "../Components/Utils/CancleComplete";
import ColorChange from "../Components/Utils/ColorChange";
import ToggleButton from "../Components/Main/ToggleButton";
import { useRecoilValue } from "recoil";
import {
  ChangeMusicColor,
  MakePageState,
  authTokenState,
  userInformationState,
} from "../atom";

const MakePage = () => {
  const makePage = useRecoilValue(MakePageState);
  const today = new Date();
  const todayInput = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;
  const [text, setText] = useState("");
  const displayText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const removeText = (e: React.MouseEvent<HTMLButtonElement>) => {
    setText("");
  };
  const makeBackgroundColor = useRecoilValue(ChangeMusicColor);
  const information = useRecoilValue(userInformationState);
  const token = useRecoilValue(authTokenState);
  return (
    <MakeBodyWrapper>
      <CancleComplete
        colorNum={-1}
        userIdx={information.userId}
        type={makePage.type}
        playlistName={text}
        backgroundIdx={makeBackgroundColor}
        token={token}
      />
      <ToggleButton />
      {makePage.type === "playlist" ? (
        <TitleMakeWrapper>
          <Title>{text}</Title>
          <TitleInput
            placeholder="제목을 입력하세요(10자 내외)"
            maxLength={10}
            minLength={2}
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
      ) : (
        <TitleMakeWrapper>
          <UnableTitle>페이지 제목</UnableTitle>
          <DateInput>{todayInput}</DateInput>
        </TitleMakeWrapper>
      )}
      <Title>페이지 배경 색상</Title>
      <ColorChange colorNumber={0} />
    </MakeBodyWrapper>
  );
};

export default MakePage;
