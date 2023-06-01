import React from "react";
import { useNavigate } from "react-router-dom";

const SpotifyLink = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>스포티파이 계정을 등록해 보세요</h2>
      <p>플레이리스트를 만들 수 있어요</p>
      <div>스포티파이 연동하러 가기</div>
      <button onClick={() => navigate("/")}>넘어가기</button>
    </>
  );
};

export default SpotifyLink;
