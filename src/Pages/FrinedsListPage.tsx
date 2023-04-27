import type { userProps } from "../Constants/interfaces";
import * as S from "../Styles/FriendsListPageStyle";
import icons from "../Css/icons";

const dummyData: userProps[] = [
  { name: "USER1", comment: "안녕하세요~" },
  {
    name: "USER2",
    comment: "가나다라마바사아자차카타파하아자차카가ㅏ다라마바사 길이제한?",
  },
  { name: "USER3", comment: "노래주세요" },
  { name: "USER99", comment: "둠칫둠칫" },
];

const FriendsListPage = () => {
  return (
    <>
      <S.PageContainer>
        <S.BackButton>{icons.back}</S.BackButton>
        <S.Ul>
          {dummyData.map((datas) => (
            <S.Li>
              <S.ProfileContainer>
                <div>{datas.name}</div>
                <div>{datas.comment}</div>
              </S.ProfileContainer>
              <S.ButtonContainer>
                <button>{icons.unfollow}</button>
                <button>{icons.spotify}</button>
              </S.ButtonContainer>
            </S.Li>
          ))}
        </S.Ul>
      </S.PageContainer>
    </>
  );
};

export default FriendsListPage;
