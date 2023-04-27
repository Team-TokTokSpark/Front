import React from "react";
import * as S from "../Styles/SettingPgeStyle";
import icons from "../Css/icons";

const SettingPage = () => {
  return (
    <>
      <S.PageContainer>
        <S.BackButton>{icons.back}</S.BackButton>
        <S.ProfileContainer>
          <S.ProfileBox>
            <S.ProfileHeader>
              <div>프로필 설정</div>
              <button>수정</button>
            </S.ProfileHeader>
            <S.ProfileInfo>
              <div>이름(닉네임)</div>
              <div>자기소개 한줄~</div>
            </S.ProfileInfo>
          </S.ProfileBox>
          <S.ProfileBox>
            <div>계정 설정</div>
            <div>카카오톡 연동 설정?</div>
            <div>스포티파이 연동</div>
          </S.ProfileBox>
          <S.ProfileBox>
            <button>로그아웃</button>
            <button>탈퇴</button>
          </S.ProfileBox>
        </S.ProfileContainer>
      </S.PageContainer>
    </>
  );
};

export default SettingPage;
