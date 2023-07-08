import React from "react";
import * as S from "../Styles/LoadingStyle";
// import { TypeAnimation } from "react-type-animation";

const NotFoundPage = () => {
  return (
    // <div>
    //   <h1>존재하지않는 페이지입니다.</h1>
    // </div>
    <>
      <S.LoadingContainer>
        <div>
          <h1>404 ERROR!</h1>
          <S.Logo src="img/logo/loading_cd.png" alt="loading_cd" />
          <S.LoadingText>page not found!</S.LoadingText>
        </div>
      </S.LoadingContainer>
    </>
  );
};
export default NotFoundPage;
