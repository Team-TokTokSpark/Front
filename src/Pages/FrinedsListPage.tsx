import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import { useNavigate } from "react-router-dom";
import { friendsListSelector } from "../atom";
import type { userProps } from "../Constants/interfaces";
import * as S from "../Styles/FriendsListPageStyle";
import icons from "../Css/icons";
import FriendsListItem from "../Components/FriendsListItem";
import { jsonURL } from "../Constants/jsonURL";

const FriendsListPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [friendsList, setFriendsList] = useRecoilState(friendsListSelector);
  const [localFriendsList, setLocalFriendsList] = useState(friendsList);
  const filteredData = localFriendsList.filter((data: userProps) =>
    data.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onToggleFollowHandler = (id: any, follow: boolean) => {
    const toggledData = localFriendsList.map((data: userProps) =>
      data.id === id ? { ...data, follow: !follow } : data
    );
    setLocalFriendsList(toggledData);
  };

  useEffect(() => {
    return () => {
      putdata();
    };
  });

  const putdata = async () => {
    await fetch(`${jsonURL}/frineds.json`, {
      method: "PUT",
      body: JSON.stringify(localFriendsList),
    });
    setFriendsList(localFriendsList);
  };

  return (
    <>
      <S.PageContainer>
        <S.FriendsListHeader>
          <button onClick={() => navigate("/")}>{icons.back}</button>
          <div>친구 목록</div>
        </S.FriendsListHeader>
        <S.InputBox>
          <input
            type="text"
            placeholder="검색"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {icons.search}
        </S.InputBox>
        <S.Ul>
          {filteredData.map((datas: userProps) => (
            <FriendsListItem
              key={datas.id}
              datas={datas}
              onToggleFollow={onToggleFollowHandler}
            />
          ))}
        </S.Ul>
      </S.PageContainer>
    </>
  );
};

export default FriendsListPage;
