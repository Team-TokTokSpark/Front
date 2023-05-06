import * as S from "../Styles/LoginPageStyle";
import { REST_API_KEY, REDIRECT_URI } from "../Constants/kakaoLoginData";
import icons from "../Css/icons";

const LoginPage = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <S.LoginContainer>
      <S.NoticeButton>{icons.notice}</S.NoticeButton>
      <S.MainContainer>
        <span>함께 만드는 플레이 리스트</span>
        <S.Logo>함플리</S.Logo>
        <img
          src="img/kakao_login/kakao_login_medium_wide.png"
          alt="kakao_login"
          onClick={handleLogin}
        />
      </S.MainContainer>
    </S.LoginContainer>
  );
};

export default LoginPage;
