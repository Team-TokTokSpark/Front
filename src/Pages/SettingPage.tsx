import { useState } from "react";
import { useNavigate } from "react-router-dom";

import KakaoLogoutButton from "../Components/KakaoLogin/KakaoLogoutButton";
import * as S from "../Styles/SettingPgeStyle";
import icons from "../Css/icons";
import { WithdrawalUser, putUserProfile } from "../Services/Profile/api";

import { useRecoilValue, useRecoilState } from "recoil";
import { userInformationState, authTokenState } from "../atom";

const SettingPage = () => {
  const navigate = useNavigate();
  const [userInformation, setUserInformation] =
    useRecoilState(userInformationState);
  const token = useRecoilValue(authTokenState);
  const [editToggle, setEditToggle] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>(userInformation.nickname);
  const [introduce, setIntroduce] = useState<string>(userInformation.introduce);

  const editToggleHandler = () => {
    setEditToggle((state) => !state);
  };

  const profileChangeHandler = async () => {
    try {
      await putUserProfile(token, nickname, introduce, userInformation.userId);
      setNickname(nickname);
      setIntroduce(introduce);
      setUserInformation({
        userId: userInformation.userId,
        nickname: nickname,
        introduce: introduce,
      });
      setEditToggle((state) => !state);
    } catch (error) {
      console.error("프로필 업데이트 실패:", error);
    }
  };

  return (
    <>
      <S.PageContainer>
        <S.FriendsListHeader>
          <button onClick={() => navigate(`/main/${userInformation.userId}`)}>
            {icons.back}
          </button>
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
          <S.AccountBox>
            <h3>계정 설정</h3>

            <KakaoLogoutButton />
            <button onClick={() => navigate("/withdrawl")}>계정 탈퇴</button>
          </S.AccountBox>
        </S.ProfileContainer>
      </S.PageContainer>
    </>
  );
};

export default SettingPage;
