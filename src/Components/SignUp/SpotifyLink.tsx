import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../Styles/SignUpPageStyle";

const SpotifyLink = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>
        <span>스포티파이</span> 계정을 등록해 보세요
      </h2>
      <p>플레이리스트를 만들어 내보내기 할 수 있어요</p>
      <S.SpotifyButton>스포티파이 연동하러 가기</S.SpotifyButton>
      <button onClick={() => navigate("/main")}>넘어가기</button>
    </>
  );
};

export default SpotifyLink;
