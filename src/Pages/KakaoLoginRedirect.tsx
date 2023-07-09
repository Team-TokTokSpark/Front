import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useSetRecoilState } from "recoil";
import { authTokenState } from "../atom";

const KakaoLoginRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setToken = useSetRecoilState(authTokenState);
  const token: any = searchParams.get("Token");
  useEffect(() => {
    setToken(token);
    navigate("/signup");
  });

  return <></>;
};

export default KakaoLoginRedirect;
