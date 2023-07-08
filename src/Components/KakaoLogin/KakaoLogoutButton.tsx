import axios from "axios";
import { useRecoilState } from "recoil";
import { authTokenState } from "../../atom";
import { useNavigate } from "react-router-dom";

const KakaoLogoutButton = () => {
  const [token, setToken] = useRecoilState(authTokenState);
  const navigate = useNavigate();

  const handleKakaoLogout = async () => {
    try {
      const response = await axios.post(
        "https://kapi.kakao.com/v1/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data); // 성공적으로 로그아웃된 사용자의 정보
      setToken(null);
      navigate("/");
    } catch (error) {
      console.error(error);
      // 로그아웃 실패 처리
      alert(
        "로그인이 안되어있기때문에 안되는 오류 & 로그인 되어있을때만 설정페이지 올수있게 해놓자"
      );
    }
  };

  return <button onClick={handleKakaoLogout}>로그아웃</button>;
};

export default KakaoLogoutButton;
