import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useSetRecoilState, useRecoilState } from "recoil";
import { authTokenState, userInformationState } from "../atom";
import { getUserInformation } from "../Services/Profile/api";

const KakaoLoginRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setToken = useSetRecoilState(authTokenState);
  const [userInformation, setUserInformation] =
    useRecoilState(userInformationState);

  const token: any = searchParams.get("Token");

  const setUser = async (token: string) => {
    const data = await getUserInformation(token);
    setUserInformation(data);
    if (data.nickname === "" || data.introduce === "") {
      navigate("/signup");
    } else {
      navigate(`/main/${data.userId}`);
    }
  };

  useEffect(() => {
    setToken(token);
    setUser(token);
  }, []);

  useEffect(() => {}, []);

  return <></>;
};

export default KakaoLoginRedirect;
