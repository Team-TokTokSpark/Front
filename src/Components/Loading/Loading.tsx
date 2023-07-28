import React from "react";
import * as S from "../../Styles/LoadingStyle";
import loading_cd from "../Utils/loading_cd.png";
const Loading = () => {
  return (
    <S.LoadingContainer>
      <div>
        <S.Logo src={loading_cd} alt="loading_cd" />

        <S.LoadingText>Loading...</S.LoadingText>
      </div>
    </S.LoadingContainer>
  );
};
export default Loading;
