import * as S from "../Styles/SettingPgeStyle";
import { useNavigate } from "react-router-dom";

const WithDrawlSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <S.PageContainer>
      <S.FriendsListHeader></S.FriendsListHeader>
      <S.WithdrawlContainer>
        <div className="center">
          <p>계정 탈퇴가 완료되었습니다.</p>
          <p>그동안 함플리를 사랑해주셔서 감사합니다.</p>
          <img src="img/logo/main_cd.png" alt="메인로고" />
          <div>
            <button className="success" onClick={() => navigate("/")}>
              메인화면으로 가기
            </button>
          </div>
        </div>
      </S.WithdrawlContainer>
    </S.PageContainer>
  );
};

export default WithDrawlSuccessPage;
