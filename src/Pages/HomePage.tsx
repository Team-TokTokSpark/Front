import { useNavigate, useParams } from "react-router-dom";
import PageShow from "../Components/Main/PageShow";
import icons from "../Css/icons";
import { EditStickerButton, ShareButton } from "../Styles/HomePageStyle";
import { UserListInfo, userInformationState, authTokenState } from "../atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { gohome } from "../Components/KakaoLogin/gohome";
import { useEffect, useState } from "react";
import { getMainApi } from "../Services/Main/api";
import { FollowToggle, getFriendsList } from "../Services/FriendsList/api";

interface Friend {
  id: number;
  nickname: string;
  introduce: string;
}

function HomePage() {
  const navigate = useNavigate();
  const [listInfo, setListInfo] = useRecoilState(UserListInfo);
  const [localFriendsList, setLocalFriendsList] = useState<Friend[]>([]);
  const [click, setClick] = useState(false);
  const { idx } = useParams();
  const stringIdx: string = idx!;
  const information = useRecoilValue(userInformationState);
  const token = useRecoilValue(authTokenState);
  const getMain = async (info: string, token: string) => {
    const result = await getMainApi(info, token);
    setListInfo(result.data);
  };
  const fetchFriendsList = async () => {
    const FriendsLists = await getFriendsList(information.userId, token);
    setLocalFriendsList(FriendsLists);
  };
  const toggleFollow = async (followerId: any) => {
    await FollowToggle(information.userId, token, followerId);
  };
  const handleButtonClick = () => {
    toggleFollow(parseInt(idx!)).then(() => {
      fetchFriendsList();
    });
  };

  useEffect(() => {
    if (token === "") {
      alert("로그인을 진행해주세요");
      navigate("/");
    } else {
      if (`${information.userId}` === idx) {
        getMain(information.userId, token);
      } else {
        getMain(stringIdx, token);
        fetchFriendsList();
      }
    }
  }, [idx]);
  useEffect(() => {
    fetchFriendsList().then(() => {
      if (localFriendsList.some((friend) => friend.id === parseInt(idx!))) {
        setClick(true);
      } else {
        setClick(false);
      }
    });
  }, [click]);
  return (
    <>
      {`${information.userId}` === idx ? (
        <div className="setting-part">
          <img
            src="/img/Setting_5.png"
            alt="editing"
            onClick={() => {
              if (gohome(token, information)) {
                navigate("/setting");
              } else {
                navigate("/");
              }
            }}
          />
        </div>
      ) : (
        <div className="other-setting-part">
          <button onClick={() => navigate(`/main/${information.userId}`)}>
            {icons.back}
          </button>
          <div>설정</div>
        </div>
      )}
      <div
        className="nickname-part"
        style={{ fontSize: "14px", fontWeight: "300" }}
      >
        <div className="music_note"> {icons.musicnote}</div>
        {listInfo.introduce}
      </div>
      <div className="title-part">
        {listInfo.nickname}
        {`${information.userId}` === idx ? (
          <ShareButton
            onClick={() => {
              if (gohome(token, information)) {
                navigate("/friendsList");
              } else {
                navigate("/");
              }
            }}
          >
            친구 목록
          </ShareButton>
        ) : localFriendsList.some((friend) => friend.id === parseInt(idx!)) ? (
          <ShareButton onClick={handleButtonClick}>언팔로우</ShareButton>
        ) : (
          <ShareButton onClick={handleButtonClick}>팔로우</ShareButton>
        )}
      </div>
      <PageShow listInfo={listInfo.playlists} />
      <div>
        {/* 여기가 변경 될 부분! 현재 userId가 안나와있기 때문! */}
        {`${information.userId}` === idx ? (
          <Link to="makePage">
            <EditStickerButton>{icons.plus}</EditStickerButton>
          </Link>
        ) : null}
      </div>
    </>
  );
}

export default HomePage;
