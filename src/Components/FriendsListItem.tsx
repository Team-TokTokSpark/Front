import { useNavigate } from "react-router-dom";
import {
  Li,
  ProfileContainer,
  ButtonContainer,
} from "../Styles/FriendsListPageStyle";

const FriendsListItem = (props: any) => {
  const navigate = useNavigate();
  const { nickname, introduce, id, follow } = props.datas;

  const toggleFollow = (id: any) => {
    props.onToggleFollow(id, follow);
  };

  return (
    <Li>
      <ProfileContainer>
        {/* dummyData 바꿔줘야함 */}
        <div
          onClick={() => {
            navigate(`/page/otherMusic/${nickname}`, {
              state: { userId: nickname, pageName: nickname },
            });
          }}
        >
          {nickname}
        </div>
        <div>{introduce}</div>
      </ProfileContainer>
      <ButtonContainer>
        {follow ? (
          <button onClick={() => toggleFollow(id)}>언팔로우</button>
        ) : (
          <button onClick={() => toggleFollow(id)}>팔로우</button>
        )}
      </ButtonContainer>
    </Li>
  );
};

export default FriendsListItem;
