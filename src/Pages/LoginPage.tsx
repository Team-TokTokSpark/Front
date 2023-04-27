import * as S from "../Styles/LoginPageStyle";
import icons from "../Css/icons";

const LoginPage = () => {
  return (
    <S.LoginContainer>
      <S.NoticeButton>{icons.notice}</S.NoticeButton>
      <S.MainContainer>
        <span>함께 만드는 플레이 리스트</span>
        <S.Logo>함플리</S.Logo>
        <img
          src="img/kakao_login/kakao_login_medium_wide.png"
          alt="kakao_login"
        />
      </S.MainContainer>
    </S.LoginContainer>
  );
};

export default LoginPage;
