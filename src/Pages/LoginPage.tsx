import { useRecoilValue } from "recoil";

import { REST_API_KEY, REDIRECT_URI } from "../Constants/kakaoLoginData";
import { authTokenState } from "../atom";
import * as S from "../Styles/LoginPageStyle";
import icons from "../Css/icons";

const LoginPage = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const a = useRecoilValue(authTokenState);

  const Loginhandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  console.log("토큰값", a);
  return (
    <S.LoginContainer>
      <S.NoticeButton>{icons.notice}</S.NoticeButton>
      <S.MainContainer>
        <S.Logo src="img/logo/main_logo.png" alt="" />
        <span>함께 만드는 플레이 리스트</span>

        <button onClick={Loginhandler}>
          <img
            src="img/kakao_login/kakao_login_medium_wide.png"
            alt="kakao_login"
          />
        </button>
      </S.MainContainer>
    </S.LoginContainer>
  );
};

export default LoginPage;
