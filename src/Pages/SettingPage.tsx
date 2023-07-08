import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import KakaoLogoutButton from "../Components/KakaoLogin/KakaoLogoutButton";
import * as S from "../Styles/SettingPgeStyle";
import icons from "../Css/icons";
import { getUserProfile, patchUserProfile } from "../Services/Profile/api";

const SettingPage = () => {
  const navigate = useNavigate();
  const [editToggle, setEditToggle] = useState<boolean>(false);

  //추후에 바꿔줘야함 임시데이터.
  const [nickname, setNickname] = useState<string>("");
  const [introduce, setIntroduce] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserProfile();
        setNickname(result[0].nickname);
        setIntroduce(result[0].introduce);
      } catch (error) {
        console.error("유저정보 가져오기 실패", error);
      }
    };

    fetchData();
  }, []);

  const editToggleHandler = () => {
    setEditToggle((state) => !state);
  };

  const profileChangeHandler = async () => {
    try {
      await patchUserProfile(nickname, introduce);
      setEditToggle((state) => !state);
    } catch (error) {
      console.error("프로필 업데이트 실패:", error);
    }
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
          <S.AccountBox>
            <h3>계정 설정</h3>

            <KakaoLogoutButton />
            <button>계정 탈퇴</button>
          </S.AccountBox>
        </S.ProfileContainer>
      </S.PageContainer>
    </>
  );
};

export default SettingPage;
