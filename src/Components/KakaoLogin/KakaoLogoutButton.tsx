import { useSetRecoilState } from "recoil";
import { authTokenState } from "../../atom";
import { useNavigate } from "react-router-dom";

const KakaoLogoutButton = () => {
  const setToken = useSetRecoilState(authTokenState);
  const navigate = useNavigate();

  const handleKakaoLogout = () => {
    // 성공적으로 로그아웃된 사용자의 정보
    setToken("");
    navigate("/");
  };

  return <button onClick={handleKakaoLogout}>로그아웃</button>;
};

export default KakaoLogoutButton;
