import React from "react";
import { Link } from "react-router-dom";

const KakaoLoginButton = () => {
  return (
    <Link to="http://43.201.220.80:8080//oauth2/authorization/kakao">
      <img
        src="img/kakao_login/kakao_login_medium_wide.png"
        alt="kakao_login"
      />
    </Link>
  );
};

export default KakaoLoginButton;
