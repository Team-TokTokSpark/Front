import React from "react";
import {
  Li,
  ProfileContainer,
  ButtonContainer,
} from "../Styles/FriendsListPageStyle";

const FriendsListItem = (props: any) => {
  const { name, comment, id, follow } = props.datas;

  const toggleFollow = (id: any) => {
    props.onToggleFollow(id, follow);
  };

  return (
    <Li>
      <ProfileContainer>
        <div>{name}</div>
        <div>{comment}</div>
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
