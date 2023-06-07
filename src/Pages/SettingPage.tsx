import { useState } from "react";
import { useNavigate } from "react-router-dom";

import KakaoLogoutButton from "../Components/SignUp/KakaoLogoutButton";
import * as S from "../Styles/SettingPgeStyle";
import icons from "../Css/icons";

const SettingPage = () => {
  const navigate = useNavigate();
  const [editToggle, setEditToggle] = useState<boolean>(false);

  //추후에 바꿔줘야함 임시데이터.
  const [nickname, setNickname] = useState("꾸꾸까까");
  const [introduce, setIntroduce] = useState(
    "자기소개입니다. 가나다라마바사아자차카"
  );

  const editToggleHandler = () => {
    setEditToggle((state) => !state);
  };
  const profileChangeHandler = () => {
    setEditToggle((state) => !state);
  };

  return (
    <>
      <S.PageContainer>
        <S.FriendsListHeader>
          <button onClick={() => navigate("/")}>{icons.back}</button>
          <div>설정</div>
        </S.FriendsListHeader>
        <S.ProfileContainer>
          <S.ProfileBox>
            <S.ProfileHeader>
              <h3>프로필 설정</h3>
              {editToggle ? (
                <button onClick={profileChangeHandler}>저장</button>
              ) : (
                <button onClick={editToggleHandler}>수정</button>
              )}
            </S.ProfileHeader>
            <S.ProfileInfo>
              <div>
                <p>닉네임</p>
                {editToggle ? (
                  <input
                    placeholder={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                ) : (
                  <span>{nickname}</span>
                )}
              </div>
              <div>
                <p>자기소개</p>
                {editToggle ? (
                  <textarea
                    placeholder={introduce}
                    onChange={(e) => setIntroduce(e.target.value)}
                  ></textarea>
                ) : (
                  <span>{introduce}</span>
                )}
              </div>
            </S.ProfileInfo>
          </S.ProfileBox>
          <S.ProfileBox>
            <h3>계정 설정</h3>
            <div className="fw700 left30">스포티파이 연동 설정</div>
            <button className="left30">연동 계정 변경</button>
            <button className="left30">연동 계정 삭제</button>

            <KakaoLogoutButton />
            <button className="fw700 left30">계정 탈퇴</button>
          </S.ProfileBox>
        </S.ProfileContainer>
      </S.PageContainer>
    </>
  );
};

export default SettingPage;
