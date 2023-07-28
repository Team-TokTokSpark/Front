import { useNavigate } from "react-router-dom";

import * as S from "../Styles/SettingPgeStyle";
import icons from "../Css/icons";
import { WithdrawalUser } from "../Services/Profile/api";
import { useRecoilValue, useRecoilState } from "recoil";
import { userInformationState, authTokenState } from "../atom";

const WithDrawlPage = () => {
  const navigate = useNavigate();

  const [userInformation, setUserInformation] =
    useRecoilState(userInformationState);
  const token = useRecoilValue(authTokenState);

  const onWithdrawlUser = async () => {
    navigate("/success");
    //서버측 500에러로인한닫아둠
    // try {
    //   //정말 계정을 탈퇴하시겠습니까? 추가?
    //   await WithdrawalUser(token, userInformation.userId);

    // } catch (error) {
    //   console.error("계정탈퇴 실패");
    // }
  };

  return (
    <>
      <S.PageContainer>
        <S.FriendsListHeader>
          <button onClick={() => navigate(`/setting`)}>{icons.back}</button>
          <div>계정탈퇴</div>
        </S.FriendsListHeader>
        <S.WithdrawlContainer>
          <h2>잠깐!</h2>
          <h2>탈퇴 전 확인해주세요.</h2>
          <ul>
            <li>
              플레이리스트, 기록페이지, 친구 목록 등 모든정보가 삭제되며, 모든
              데이터는 복구가 불가능 합니다.
            </li>
          </ul>
          <div>
            <button onClick={onWithdrawlUser}>탈퇴하기</button>
          </div>
        </S.WithdrawlContainer>
      </S.PageContainer>
    </>
  );
};

export default WithDrawlPage;
