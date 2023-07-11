import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Li,
  ProfileContainer,
  ButtonContainer,
} from "../Styles/FriendsListPageStyle";
import { FollowToggle } from "../Services/FriendsList/api";

const FriendsListItem = (props: any) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const token = props.token;
  const userId = props.userId;
  const { nickname, introduce, id } = props.datas;

  const toggleFollow = async (followerId: any) => {
    setClicked((state) => !state);
    await FollowToggle(userId, token, followerId);
  };

  return (
    <Li>
      <ProfileContainer>
        {/* dummyData 바꿔줘야함 */}
        <div
          onClick={() => {
            navigate(`/page/otherMusic/${nickname}`);
          }}
        >
          {nickname}
        </div>
        <div>{introduce}</div>
      </ProfileContainer>
      <ButtonContainer>
        {!clicked ? (
          <button onClick={() => toggleFollow(id)}>언팔로우</button>
        ) : (
          <button onClick={() => toggleFollow(id)}>팔로우</button>
        )}
      </ButtonContainer>
    </Li>
  );
};

export default FriendsListItem;
