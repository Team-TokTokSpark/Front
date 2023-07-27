import { useNavigate } from "react-router-dom";

import * as S from "../Styles/SettingPgeStyle";
import icons from "../Css/icons";

const WithDrawlPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.PageContainer>
        <S.FriendsListHeader>
          <button onClick={() => navigate(`/main/setting`)}>
            {icons.back}
          </button>
          <div>계정탈퇴</div>
        </S.FriendsListHeader>
      </S.PageContainer>
    </>
  );
};

export default WithDrawlPage;
