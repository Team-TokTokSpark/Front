import KakaoLoginButton from "../Components/KakaoLogin/KakaoLoginButton";
import * as S from "../Styles/LoginPageStyle";

const LoginPage = () => {
  return (
    <S.LoginContainer>
      <S.MainContainer>
        <S.Logo src="img/logo/main_logo.png" alt="main_logo" />
        <p>
          <strong>함</strong>께 만드는
          <strong>플</strong>
          레이
          <strong>리</strong>
          스트
        </p>
        <S.CD src="img/logo/main_cd.png" />

        <S.ArrowBox>
          <S.ArrowItem></S.ArrowItem>
          <S.ArrowItem></S.ArrowItem>
          <S.ArrowItem></S.ArrowItem>
        </S.ArrowBox>
        <KakaoLoginButton />
      </S.MainContainer>
    </S.LoginContainer>
  );
};

export default LoginPage;
