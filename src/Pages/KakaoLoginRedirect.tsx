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

  console.log(token);

  const setUser = async (token: string) => {
    const data = await getUserInformation(token);
    setUserInformation(data);
  };

  useEffect(() => {
    setToken(token);
    setUser(token);
  }, []);

  useEffect(() => {
    console.log("유저정보", userInformation);
    if (userInformation.nickname === "" || userInformation.introduce === "") {
      navigate("/signup");
    } else {
      navigate(`/main/${userInformation.userId}`);
    }
  }, []);

  return <></>;
};

export default KakaoLoginRedirect;
