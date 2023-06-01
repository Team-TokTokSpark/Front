import { useState } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import * as S from "../Styles/FriendsListPageStyle";
import icons from "../Css/icons";

import { friendsListSelector } from "../atom";
import type { friendsProps } from "../Constants/interfaces";
import { jsonURL } from "../Constants/jsonURL";
import FriendsListItem from "../Components/FriendsListItem";
import axios from "axios";

const FriendsListPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const friendsList = useRecoilValue(friendsListSelector);
  const [localFriendsList, setLocalFriendsList] = useState(friendsList);
  const filteredData = localFriendsList.filter((data: friendsProps) =>
    data.nickname?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onToggleFollowHandler = async (id: any, follow: boolean) => {
    const toggledData = localFriendsList.map((data: friendsProps) =>
      data.id === id ? { ...data, follow: !follow } : data
    );
    setLocalFriendsList(toggledData);
    await axios(`${jsonURL}/friends/${id}`, {
      method: "PUT",
      data: toggledData[id],
    });
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
          {filteredData.map((datas: friendsProps) => (
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
