import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useSetRecoilState } from "recoil";
import { authTokenState } from "../atom";

const KakaoLoginRedirect = () => {
  const params: any = useParams();
  const navigate = useNavigate();
  const setToken = useSetRecoilState(authTokenState);

  useEffect(() => {
    setToken(params.token);
    navigate("/signup");
  });

  return <></>;
};

export default KakaoLoginRedirect;
