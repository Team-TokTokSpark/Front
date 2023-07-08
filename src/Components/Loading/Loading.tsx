import React from "react";
import * as S from "../../Styles/LoadingStyle";

const Loading = () => {
  return (
    <S.LoadingContainer>
      <div>
        <S.Logo src="img/logo/loading_cd.png" alt="loading_cd" />

        <S.LoadingText>Loading...</S.LoadingText>
      </div>
    </S.LoadingContainer>
  );
};
export default Loading;
