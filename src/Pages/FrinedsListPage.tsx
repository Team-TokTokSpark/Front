import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import * as S from "../Styles/FriendsListPageStyle";
import icons from "../Css/icons";

import type { friendsProps } from "../Constants/interfaces";
import { getFriendsList } from "../Services/FriendsList/api";
import { authTokenState, userInformationState } from "../atom";
import FriendsListItem from "../Components/FriendsListItem";

const FriendsListPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const token = useRecoilValue(authTokenState);
  const userInformation = useRecoilValue(userInformationState);
  const [localFriendsList, setLocalFriendsList] = useState([]);
  const filteredData = localFriendsList.filter((data: friendsProps) =>
    data.nickname?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const fetchFriendsList = async () => {
    const FriendsLists = await getFriendsList(userInformation.userId, token);
    setLocalFriendsList(FriendsLists);
    console.log(FriendsLists);
  };
  useEffect(() => {
    fetchFriendsList();
  }, []);

  return (
    <>
      <S.PageContainer>
        <S.FriendsListHeader>
          <button onClick={() => navigate("/main")}>{icons.back}</button>
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
              userId={userInformation.userId}
              token={token}
            />
          ))}
        </S.Ul>
      </S.PageContainer>
    </>
  );
};

export default FriendsListPage;
