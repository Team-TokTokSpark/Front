import { useSetRecoilState } from "recoil";
import { authTokenState, userInformationState } from "../../atom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const KakaoLogoutButton = () => {
  const setToken = useSetRecoilState(authTokenState);
  const setUserInformationState = useSetRecoilState(userInformationState);
  const navigate = useNavigate();

  const handleKakaoLogout = () => {
    Swal.fire({
      text: "로그아웃하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "로그아웃",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        setToken("");
        setUserInformationState("");
        navigate("/");
      }
    });
  };

  return <button onClick={handleKakaoLogout}>로그아웃</button>;
};

export default KakaoLogoutButton;
